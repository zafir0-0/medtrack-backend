-- CREATE DATABASE medtrack;

-- ================================
-- USERS & AUTHORIZATION TABLES
-- ================================

CREATE TABLE users (                                                -- Table to store system users
    user_id SERIAL PRIMARY KEY,                                      -- Unique user identifier
    full_name VARCHAR(150) NOT NULL,                                 -- User full name
    email VARCHAR(150) UNIQUE NOT NULL,                              -- Login email
    password_hash TEXT NOT NULL,                                     -- Hashed password (bcrypt)
    role VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE                                   -- Account status
);

-- ================================
-- MEDICINE MASTER
-- ================================

CREATE TABLE medicines (                                            -- Table to store medicines
    medicine_id SERIAL PRIMARY KEY,                                  -- Unique medicine ID
    generic_name VARCHAR(100) NOT NULL,                              -- Generic medicine name
    strength VARCHAR(50) NOT NULL,                                   -- Strength (e.g., 500 mg)
    dosage_form VARCHAR(50) NOT NULL,                                -- Tablet / Syrup
    unit VARCHAR(50) NOT NULL,                                       -- Tablet / Bottle
    low_stock_threshold INT DEFAULT 0,
    expiry_threshold_days INT DEFAULT 30                             -- Alert X days before expiry 
);

-- ================================
-- SUPPLIER & TENDER
-- ================================

CREATE TABLE suppliers (                                            -- Table to store suppliers
    supplier_id SERIAL PRIMARY KEY,                                  -- Unique supplier ID
    supplier_name VARCHAR(150) NOT NULL,                             -- Supplier name
    contact_number VARCHAR(20),                                      -- Contact number
    address TEXT                                                     -- Supplier address
);

CREATE TABLE tenders (                                              -- Table to store tenders
    tender_id SERIAL PRIMARY KEY,                                    -- Unique tender ID
    tender_number VARCHAR(100) NOT NULL,                             -- Government tender number
    supplier_id INT NOT NULL,                                        -- Supplier reference
    tender_year INT NOT NULL,                                        -- Tender year
    CONSTRAINT fk_tender_supplier                                    -- FK constraint
        FOREIGN KEY (supplier_id)
        REFERENCES suppliers(supplier_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- ================================
-- MEDICINE BATCH & INVENTORY
-- ================================

CREATE TABLE medicine_batches (                                     -- Table to track batches
    batch_id SERIAL PRIMARY KEY,                                     -- Unique batch ID
    medicine_id INT NOT NULL,                                        -- Medicine reference
    tender_id INT NOT NULL,                                          -- Tender reference
    batch_number VARCHAR(100) NOT NULL,                              -- Manufacturer batch no
    expiry_date DATE NOT NULL,                                       -- Expiry date
    quantity_available INT NOT NULL CHECK (quantity_available >= 0), -- Available quantity
    CONSTRAINT fk_batch_medicine                                     -- FK to medicine
        FOREIGN KEY (medicine_id)
        REFERENCES medicines(medicine_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT fk_batch_tender                                       -- FK to tender
        FOREIGN KEY (tender_id)
        REFERENCES tenders(tender_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- ================================
-- PATIENT & PRESCRIPTION
-- ================================

CREATE TABLE patients (                                             -- Table to store patients
    patient_id SERIAL PRIMARY KEY,                                   -- Unique patient ID
    patient_name VARCHAR(150) NOT NULL,                              -- Patient name
    age INT NOT NULL CHECK (age >= 0),                               -- Patient age
    gender VARCHAR(10) NOT NULL                                      -- Gender
);

CREATE TABLE prescriptions (                                        -- Table to store prescriptions
    prescription_id SERIAL PRIMARY KEY,                              -- Unique prescription ID
    patient_id INT NOT NULL,                                         -- Patient reference
    doctor_id INT NOT NULL,                                          -- Doctor (user) reference
    prescription_date DATE NOT NULL,                                 -- Date of prescription
    CONSTRAINT fk_prescription_patient                               -- FK to patient
        FOREIGN KEY (patient_id)
        REFERENCES patients(patient_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT fk_prescription_doctor                                -- FK to user (doctor)
        FOREIGN KEY (doctor_id)
        REFERENCES users(user_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

CREATE TABLE prescription_items (                                   -- Medicines per prescription
    prescription_item_id SERIAL PRIMARY KEY,                         -- Unique item ID
    prescription_id INT NOT NULL,                                    -- Prescription reference
    medicine_id INT NOT NULL,                                        -- Medicine reference
    quantity_prescribed INT NOT NULL CHECK (quantity_prescribed > 0),-- Quantity prescribed
    CONSTRAINT fk_item_prescription                                  -- FK to prescription
        FOREIGN KEY (prescription_id)
        REFERENCES prescriptions(prescription_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_item_medicine                                      -- FK to medicine
        FOREIGN KEY (medicine_id)
        REFERENCES medicines(medicine_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
