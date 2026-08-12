const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/Database');
const Patient = require('./PatientModel');
const User = require('./UserModel');

class Prescription extends Sequelize.Model { }

Prescription.init({
    prescription_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Patient,
            key: 'id',
        },
    },
    doctor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    prescription_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'prescriptions',
    freezeTableName: true,
    timestamps: false,
});

Prescription.sync({ force: false });

module.exports = Prescription;
