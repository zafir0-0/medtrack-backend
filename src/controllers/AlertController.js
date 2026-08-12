const AlertService = require('../services/AlertService');

class AlertController {
    constructor() { this.service = new AlertService(); }

    getLowStockMedicines = async (req, res) => {
        try {
            const items = await this.service.getLowStockMedicines();
            res.json(items);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    getExpiringBatches = async (req, res) => {
        try {
            const items = await this.service.getExpiringBatches();
            res.json(items);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
}

module.exports = AlertController;
