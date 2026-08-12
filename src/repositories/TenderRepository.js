const Tender = require('../models/TenderModel');

class TenderRepository {
    getAll = async () =>
        Tender.findAll();

    getById = async (id) =>
        Tender.findByPk(id);

    create = async (data) =>
        Tender.create(data);

    update = async (id, data) =>
        Tender.update(data, { where: { tender_id: id } });

    delete = async (id) =>
        Tender.destroy({ where: { tender_id: id } });
}

module.exports = TenderRepository;
