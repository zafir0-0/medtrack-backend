const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/Database');

class Medicine extends Sequelize.Model { }

Medicine.init({
    medicine_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    generic_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    strength: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    dosage_form: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    low_stock_threshold: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    expiry_threshold_days: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'medicines',
    freezeTableName: true,
    timestamps: false,
});

Medicine.sync({ force: false });

module.exports = Medicine;
