const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/Database');
const Prescription = require('./PrescriptionModel');
const Medicine = require('./MedicineModel');

class PrescriptionItem extends Sequelize.Model { }

PrescriptionItem.init({
    prescription_item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    prescription_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Prescription,
            key: 'id',
        },
    },
    medicine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Medicine,
            key: 'id',
        },
    },
    quantity_prescribed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1 },
    },
}, {
    sequelize,
    modelName: 'prescription_items',
    freezeTableName: true,
    timestamps: false,
});

PrescriptionItem.sync({ force: false });

module.exports = PrescriptionItem;
