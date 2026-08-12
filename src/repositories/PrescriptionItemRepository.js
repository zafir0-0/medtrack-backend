const PrescriptionItem = require('../models/PrescriptionItemModel');

class PrescriptionItemRepository {
    getAll = async () =>
        PrescriptionItem.findAll();

    getById = async (id) =>
        PrescriptionItem.findByPk(id);

    create = async (data) =>
        PrescriptionItem.create(data);

    update = async (id, data) =>
        PrescriptionItem.update(data, { where: { prescription_item_id: id } });

    delete = async (id) =>
        PrescriptionItem.destroy({ where: { prescription_item_id: id } });
}

module.exports = PrescriptionItemRepository;
