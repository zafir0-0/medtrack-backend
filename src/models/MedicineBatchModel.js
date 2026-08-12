const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/Database');
const Medicine = require('./MedicineModel');
const Tender = require('./TenderModel');

class MedicineBatch extends Sequelize.Model { }

MedicineBatch.init({
    batch_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    medicine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Medicine,
            key: 'medicine_id',
        },
    },
    tender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Tender,
            key: 'tender_id',
        },
    },
    batch_number: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    expiry_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    quantity_available: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
}, {
    sequelize,
    modelName: 'medicine_batches',
    freezeTableName: true,
    timestamps: false,
});

MedicineBatch.sync({ force: false });

Medicine.hasMany(MedicineBatch, { foreignKey: 'medicine_id', as: 'batches' });
MedicineBatch.belongsTo(Medicine, { foreignKey: 'medicine_id', as: 'medicine' });

Tender.hasMany(MedicineBatch, { foreignKey: 'tender_id', as: 'batches' });
MedicineBatch.belongsTo(Tender, { foreignKey: 'tender_id', as: 'tender' });

module.exports = MedicineBatch;
