INSERT INTO users (full_name, email, password_hash, role, is_active)
VALUES
('System Admin', 'admin@hospital.gov', 'hashed_password_1', 'admin', TRUE),
('Main Pharmacist', 'pharmacist@hospital.gov', 'hashed_password_2', 'pharmacist', TRUE),
('Dr. Rahman', 'doctor@hospital.gov', 'hashed_password_3', 'doctor', TRUE);

INSERT INTO medicines (generic_name, strength, dosage_form, unit)
VALUES
('Paracetamol', '500 mg', 'Tablet', 'Tablet'),
('Amoxicillin', '250 mg', 'Capsule', 'Capsule'),
('ORS', 'Standard', 'Sachet', 'Sachet');

INSERT INTO suppliers (supplier_name, contact_number, address)
VALUES
('Beximco Pharmaceuticals Ltd.', '017XXXXXXXX', 'Dhaka, Bangladesh'),
('Square Pharmaceuticals Ltd.', '018XXXXXXXX', 'Gazipur, Bangladesh');

INSERT INTO tenders (tender_number, supplier_id, tender_year)
VALUES
('DGHS-TENDER-2024-01', 1, 2024),
('DGHS-TENDER-2024-02', 2, 2024);

INSERT INTO medicine_batches
(medicine_id, tender_id, batch_number, expiry_date, quantity_available)
VALUES
(1, 1, 'PCM-BATCH-001', '2026-01-31', 1000),
(1, 1, 'PCM-BATCH-002', '2025-06-30', 500),
(2, 2, 'AMX-BATCH-001', '2025-12-31', 300),
(3, 2, 'ORS-BATCH-001', '2026-03-31', 800);

INSERT INTO patients (patient_name, age, gender)
VALUES
('Abdul Karim', 45, 'Male'),
('Fatema Begum', 30, 'Female');

INSERT INTO prescriptions (patient_id, doctor_id, prescription_date)
VALUES
(1, 3, CURRENT_DATE),
(2, 3, CURRENT_DATE);

INSERT INTO prescription_items
(prescription_id, medicine_id, quantity_prescribed)
VALUES
(1, 1, 10),
(1, 3, 5),
(2, 2, 7);
