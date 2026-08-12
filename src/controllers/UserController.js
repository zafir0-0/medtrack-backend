const UserService = require('../services/UserService');

class UserController {
    constructor() {
        this.userService = new UserService();
    }
    getAllUsers = async (req, res) => {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    getUserById = async (req, res) => {
        try {
            const user = await this.userService.getUserById(req.params.id);
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    getUserByEmailAndPassword = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await this.userService.getUserByEmailAndPassword(email, password);
            if (user) {
                return res.json(user);
            }
            res.status(401).json({ error: 'Invalid email or password' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    createUser = async (req, res) => {
        try {
            const user = await this.userService.createUser(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    updateUser = async (req, res) => {
        try {
            const result = await this.userService.updateUser(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    deleteUser = async (req, res) => {
        try {
            const result = await this.userService.deleteUser(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
}

module.exports = UserController;
