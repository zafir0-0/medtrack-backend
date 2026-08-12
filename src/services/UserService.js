const UserRepository = require('../repositories/UserRepository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    getAllUsers = async () =>
        this.userRepository.getAll();

    getUserById = async (id) =>
        this.userRepository.getById(id);

    getUserByEmailAndPassword = async (email, password) =>
        this.userRepository.getByEmailAndPassword(email, password);

    createUser = async (userData) =>
        this.userRepository.create(userData);

    updateUser = async (id, userData) =>
        this.userRepository.update(id, userData);

    deleteUser = async (id) =>
        this.userRepository.delete(id);
}

module.exports = UserService;
