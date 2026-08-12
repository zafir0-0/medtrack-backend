const User = require('../models/UserModel');

class UserRepository {
    getAll = async () =>
        User.findAll();

    getById = async (id) =>
        User.findByPk(id);

    getByEmailAndPassword = async (email, password) =>
        User.findOne({ where: { email, password_hash: password } });

    create = async (userData) =>
        User.create(userData);

    update = async (id, userData) =>
        User.update(userData, { where: { user_id: id } });

    delete = async (id) =>
        User.destroy({ where: { user_id: id } });
}

module.exports = UserRepository;
