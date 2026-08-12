
// Load environment variables from the appropriate .env file
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./src/utils/Database');
const userRoutes = require('./src/routes/UserRoutes');
const medicineRoutes = require('./src/routes/MedicineRoutes');
const supplierRoutes = require('./src/routes/SupplierRoutes');
const tenderRoutes = require('./src/routes/TenderRoutes');
const medicineBatchRoutes = require('./src/routes/MedicineBatchRoutes');
const patientRoutes = require('./src/routes/PatientRoutes');
const prescriptionRoutes = require('./src/routes/PrescriptionRoutes');
const prescriptionItemRoutes = require('./src/routes/PrescriptionItemRoutes');
const alertRoutes = require('./src/routes/AlertRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/tenders', tenderRoutes);
app.use('/api/batches', medicineBatchRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/prescription-items', prescriptionItemRoutes);
app.use('/api/alerts', alertRoutes);

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(process.env.APPLICATION_PORT, () => console.log(`Example app listening on port ${process.env.APPLICATION_PORT}!`));
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = app;
