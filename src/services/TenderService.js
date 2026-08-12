const TenderRepository = require('../repositories/TenderRepository');

class TenderService {
    constructor() { this.repo = new TenderRepository(); }

    getAll = async () =>
        this.repo.getAll();

    getById = async (id) =>
        this.repo.getById(id);

    create = async (data) =>
        this.repo.create(data);

    update = async (id, data) =>
        this.repo.update(id, data);

    delete = async (id) =>
        this.repo.delete(id);
}

module.exports = TenderService;
