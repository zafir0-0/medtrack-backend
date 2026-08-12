const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/Database');

class Supplier extends Sequelize.Model { }

Supplier.init({
    supplier_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    supplier_name: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    contact_number: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'suppliers',
    freezeTableName: true,
    timestamps: false,
});

Supplier.sync({ force: false });

module.exports = Supplier;
