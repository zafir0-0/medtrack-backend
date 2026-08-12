const Prescription = require('../models/PrescriptionModel');

class PrescriptionRepository {
    getAll = async () =>
        Prescription.findAll();

    getAllByDoctor = async (doctor_id) =>
        Prescription.findAll({ 
            where: { doctor_id: doctor_id },
            order: [['prescription_date', 'DESC']]
        });

    getById = async (id) =>
        Prescription.findByPk(id);

    create = async (data) =>
        Prescription.create(data);

    update = async (id, data) =>
        Prescription.update(data, { where: { prescription_id: id } });

    delete = async (id) =>
        Prescription.destroy({ where: { prescription_id: id } });
}

module.exports = PrescriptionRepository;
