const Patient = require('../models/PatientModel');

class PatientRepository {
    getAll = async () =>
        Patient.findAll();

    getById = async (id) =>
        Patient.findByPk(id);

    create = async (data) =>
        Patient.create(data);

    update = async (id, data) =>
        Patient.update(data, { where: { patient_id: id } });

    delete = async (id) =>
        Patient.destroy({ where: { patient_id: id } });
}

module.exports = PatientRepository;
