const express = require('express');
const SupplierController = require('../controllers/SupplierController');

class SupplierRoutes {
    constructor() {
        this.router = express.Router();
        this.controller = new SupplierController();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
        this.router.get('/', (req, res) => this.controller.getAllSuppliers(req, res));
        this.router.get('/:id', (req, res) => this.controller.getSupplierById(req, res));
        this.router.post('/', (req, res) => this.controller.createSupplier(req, res));
        this.router.put('/:id', (req, res) => this.controller.updateSupplier(req, res));
        this.router.delete('/:id', (req, res) => this.controller.deleteSupplier(req, res));
    };
}

module.exports = new SupplierRoutes().router;
