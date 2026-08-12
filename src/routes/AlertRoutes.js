const express = require('express');
const AlertController = require('../controllers/AlertController');

class AlertRoutes {
    constructor() {
        this.router = express.Router();
        this.controller = new AlertController();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
        this.router.get('/low-stock', (req, res) => this.controller.getLowStockMedicines(req, res));
        this.router.get('/expiring', (req, res) => this.controller.getExpiringBatches(req, res));
    };
}

module.exports = new AlertRoutes().router;
