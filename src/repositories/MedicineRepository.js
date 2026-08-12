const Medicine = require('../models/MedicineModel');

class MedicineRepository {
    getAll = async () =>
        Medicine.findAll();

    getById = async (id) =>
        Medicine.findByPk(id);

    create = async (data) =>
        Medicine.create(data);

    update = async (id, data) =>
        Medicine.update(data, { where: { medicine_id: id } });

    delete = async (id) =>
        Medicine.destroy({ where: { medicine_id: id } });
}

module.exports = MedicineRepository;
