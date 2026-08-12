const express = require('express');
const PrescriptionItemController = require('../controllers/PrescriptionItemController');

class PrescriptionItemRoutes {
    constructor() {
        this.router = express.Router();
        this.controller = new PrescriptionItemController();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
        this.router.get('/', (req, res) => this.controller.getAllItems(req, res));
        this.router.get('/:id', (req, res) => this.controller.getItemById(req, res));
        this.router.post('/', (req, res) => this.controller.createItem(req, res));
        this.router.put('/:id', (req, res) => this.controller.updateItem(req, res));
        this.router.delete('/:id', (req, res) => this.controller.deleteItem(req, res));
    };
}

module.exports = new PrescriptionItemRoutes().router;
