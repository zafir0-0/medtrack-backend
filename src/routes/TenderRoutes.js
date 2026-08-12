const express = require('express');
const TenderController = require('../controllers/TenderController');

class TenderRoutes {
    constructor() {
        this.router = express.Router();
        this.controller = new TenderController();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
        this.router.get('/', (req, res) => this.controller.getAllTenders(req, res));
        this.router.get('/:id', (req, res) => this.controller.getTenderById(req, res));
        this.router.post('/', (req, res) => this.controller.createTender(req, res));
        this.router.put('/:id', (req, res) => this.controller.updateTender(req, res));
        this.router.delete('/:id', (req, res) => this.controller.deleteTender(req, res));
    };
}

module.exports = new TenderRoutes().router;
