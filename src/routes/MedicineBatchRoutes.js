const express = require('express');
const MedicineBatchController = require('../controllers/MedicineBatchController');

class MedicineBatchRoutes {
    constructor() {
        this.router = express.Router();
        this.controller = new MedicineBatchController();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
        this.router.get('/', (req, res) => this.controller.getAllBatches(req, res));
        this.router.get('/:id', (req, res) => this.controller.getBatchById(req, res));
        this.router.post('/', (req, res) => this.controller.createBatch(req, res));
        this.router.put('/:id', (req, res) => this.controller.updateBatch(req, res));
        this.router.delete('/:id', (req, res) => this.controller.deleteBatch(req, res));
    };
}

module.exports = new MedicineBatchRoutes().router;
