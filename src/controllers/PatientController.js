const PatientService = require('../services/PatientService');

class PatientController {
    constructor() { this.service = new PatientService(); }

    getAllPatients = async (req, res) => {
        try {
            const items = await this.service.getAll();
            res.json(items);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    getPatientById = async (req, res) => {
        try {
            const item = await this.service.getById(req.params.id);
            res.json(item);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    createPatient = async (req, res) => {
        try {
            const created = await this.service.create(req.body);
            res.json(created);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    updatePatient = async (req, res) => {
        try {
            const result = await this.service.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    deletePatient = async (req, res) => {
        try {
            const result = await this.service.delete(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
}

module.exports = PatientController;
