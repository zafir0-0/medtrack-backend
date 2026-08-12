const PrescriptionRepository = require('../repositories/PrescriptionRepository');

class PrescriptionService {
    constructor() { this.repo = new PrescriptionRepository(); }

    getAll = async () =>
        this.repo.getAll();

    getAllByDoctor = async (doctor_id) =>
        this.repo.getAllByDoctor(doctor_id);

    getById = async (id) =>
        this.repo.getById(id);

    create = async (data) =>
        this.repo.create(data);

    update = async (id, data) =>
        this.repo.update(id, data);

    delete = async (id) =>
        this.repo.delete(id);
}

module.exports = PrescriptionService;
