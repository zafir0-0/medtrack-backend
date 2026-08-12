const MedicineBatch = require('../models/MedicineBatchModel');

class MedicineBatchRepository {
    getAll = async () => {
        return await MedicineBatch.findAll();
    }

    getById = async (id) => {
        return await MedicineBatch.findByPk(id);
    }

    create = async (data) => {
        return await MedicineBatch.create(data);
    }

    update = async (id, data) => {
        return await MedicineBatch.update(data, { where: { batch_id: id } });
    }

    delete = async (id) => {
        return await MedicineBatch.destroy({ where: { batch_id: id } });
    }
}

module.exports = MedicineBatchRepository;
