const express = require('express');
const UserController = require('../controllers/UserController');

class UserRoutes {
    constructor() {
        this.router = express.Router();
        this.userController = new UserController();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
        this.router.get('/', (req, res) => this.userController.getAllUsers(req, res));
        this.router.get('/:id', (req, res) => this.userController.getUserById(req, res));
        this.router.post('/login', (req, res) => this.userController.getUserByEmailAndPassword(req, res));
        this.router.post('/', (req, res) => this.userController.createUser(req, res));
        this.router.put('/:id', (req, res) => this.userController.updateUser(req, res));
        this.router.delete('/:id', (req, res) => this.userController.deleteUser(req, res));
    };
};

module.exports = new UserRoutes().router;
