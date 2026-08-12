const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/Database');
const Supplier = require('./SupplierModel');

class Tender extends Sequelize.Model { }

Tender.init({
    tender_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tender_number: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Supplier,
            key: 'id',
        },
    },
    tender_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'tenders',
    freezeTableName: true,
    timestamps: false,
});

Tender.sync({ force: false });

module.exports = Tender;
