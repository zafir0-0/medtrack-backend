const Supplier = require('../models/SupplierModel');

class SupplierRepository {
    getAll = async () =>
        Supplier.findAll();

    getById = async (id) =>
        Supplier.findByPk(id);

    create = async (data) =>
        Supplier.create(data);

    update = async (id, data) =>
        Supplier.update(data, { where: { supplier_id: id } });

    delete = async (id) =>
        Supplier.destroy({ where: { supplier_id: id } });
}

module.exports = SupplierRepository;
