const { sequelize } = require('../utils/Database');
const Medicine = require('../models/MedicineModel');
const MedicineBatch = require('../models/MedicineBatchModel');

class AlertRepository {

    // 1️⃣ Fetch medicines below their low-stock threshold
    getLowStockMedicines = async () => {
        const lowStockMedicines = await Medicine.findAll({
            attributes: [
                'medicine_id',
                'generic_name',
                'low_stock_threshold',
                [sequelize.fn('SUM', sequelize.col('batches.quantity_available')), 'total_quantity']
            ],
            include: [
                {
                    model: MedicineBatch,
                    as: 'batches', // must match your hasMany alias
                    attributes: []
                }
            ],
            group: ['medicines.medicine_id', 'medicines.generic_name', 'medicines.low_stock_threshold'],
            having: sequelize.literal('SUM(batches.quantity_available) <= medicines.low_stock_threshold')
        });

        return lowStockMedicines;
    }

    // 2️⃣ Fetch batches about to expire within expiry_threshold_days
    getExpiringBatches = async () => {
        const expiringBatches = await MedicineBatch.findAll({
            attributes: [
                'batch_id',
                'batch_number',
                'expiry_date',
                'quantity_available',
                [sequelize.col('medicine.generic_name'), 'medicine_name'],
                [sequelize.col('medicine.expiry_threshold_days'), 'expiry_threshold_days'],
                [sequelize.literal('"expiry_date" - CURRENT_DATE'), 'days_left']
            ],
            include: [
                {
                    model: Medicine,
                    as: 'medicine',   // ⚠ must match the alias defined in association
                    attributes: []
                }
            ],
            where: sequelize.literal('("expiry_date" - CURRENT_DATE) <= "medicine"."expiry_threshold_days"')
        });

        return expiringBatches;
    }
}

module.exports = AlertRepository;
