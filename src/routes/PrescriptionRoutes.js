const express = require('express');
const PrescriptionController = require('../controllers/PrescriptionController');

class PrescriptionRoutes {
    constructor() {
        this.router = express.Router();
        this.controller = new PrescriptionController();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
        this.router.get('/', (req, res) => this.controller.getAllPrescriptions(req, res));
        this.router.get('/:id', (req, res) => this.controller.getPrescriptionById(req, res));
        this.router.get('/doctor/:doctor_id', (req, res) => this.controller.getPrescriptionsByDoctor(req, res));
        this.router.post('/', (req, res) => this.controller.createPrescription(req, res));
        this.router.put('/:id', (req, res) => this.controller.updatePrescription(req, res));
        this.router.delete('/:id', (req, res) => this.controller.deletePrescription(req, res));
    };
}

module.exports = new PrescriptionRoutes().router;
