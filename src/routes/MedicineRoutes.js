const express = require('express');
const MedicineController = require('../controllers/MedicineController');

class MedicineRoutes {
    constructor() {
        this.router = express.Router();
        this.controller = new MedicineController();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
        this.router.get('/', (req, res) => this.controller.getAllMedicines(req, res));
        this.router.get('/:id', (req, res) => this.controller.getMedicineById(req, res));
        this.router.post('/', (req, res) => this.controller.createMedicine(req, res));
        this.router.put('/:id', (req, res) => this.controller.updateMedicine(req, res));
        this.router.delete('/:id', (req, res) => this.controller.deleteMedicine(req, res));
    };
};

module.exports = new MedicineRoutes().router;
