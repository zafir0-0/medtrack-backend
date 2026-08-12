const express = require('express');
const PatientController = require('../controllers/PatientController');

class PatientRoutes {
    constructor() {
        this.router = express.Router();
        this.controller = new PatientController();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
        this.router.get('/', (req, res) => this.controller.getAllPatients(req, res));
        this.router.get('/:id', (req, res) => this.controller.getPatientById(req, res));
        this.router.post('/', (req, res) => this.controller.createPatient(req, res));
        this.router.put('/:id', (req, res) => this.controller.updatePatient(req, res));
        this.router.delete('/:id', (req, res) => this.controller.deletePatient(req, res));
    };
};

module.exports = new PatientRoutes().router;
