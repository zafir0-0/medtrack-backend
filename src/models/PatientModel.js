const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/Database');

class Patient extends Sequelize.Model { }

Patient.init({
    patient_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    patient_name: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0 },
    },
    gender: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'patients',
    freezeTableName: true,
    timestamps: false,
});

Patient.sync({ force: false });

module.exports = Patient;
