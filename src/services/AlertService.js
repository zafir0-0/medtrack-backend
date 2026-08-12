const AlertRepository = require('../repositories/AlertRepository');

class AlertService {
    constructor() { this.repo = new AlertRepository(); }

    getLowStockMedicines = async () =>
        this.repo.getLowStockMedicines();
    
    getExpiringBatches = async () =>
        this.repo.getExpiringBatches();
}

module.exports = AlertService;
