# MedTrack BackEnd

API Routes

Base URL: `http://localhost:<APPLICATION_PORT>/api`

- **Users:**

  - `GET /api/users` — list users
  - `GET /api/users/:id` — get user by id
  - `POST /api/users/login` — login user
  - `POST /api/users` — create user
  - `PUT /api/users/:id` — update user
  - `DELETE /api/users/:id` — delete user

- **Medicines:**

  - `GET /api/medicines` — list medicines
  - `GET /api/medicines/:id` — get medicine by id
  - `POST /api/medicines` — create medicine
  - `PUT /api/medicines/:id` — update medicine
  - `DELETE /api/medicines/:id` — delete medicine

- **Suppliers:**

  - `GET /api/suppliers` — list suppliers
  - `GET /api/suppliers/:id` — get supplier by id
  - `POST /api/suppliers` — create supplier
  - `PUT /api/suppliers/:id` — update supplier
  - `DELETE /api/suppliers/:id` — delete supplier

- **Tenders:**

  - `GET /api/tenders` — list tenders
  - `GET /api/tenders/:id` — get tender by id
  - `POST /api/tenders` — create tender
  - `PUT /api/tenders/:id` — update tender
  - `DELETE /api/tenders/:id` — delete tender

- **Medicine Batches:**

  - `GET /api/batches` — list batches
  - `GET /api/batches/:id` — get batch by id
  - `POST /api/batches` — create batch
  - `PUT /api/batches/:id` — update batch
  - `DELETE /api/batches/:id` — delete batch

- **Patients:**

  - `GET /api/patients` — list patients
  - `GET /api/patients/:id` — get patient by id
  - `POST /api/patients` — create patient
  - `PUT /api/patients/:id` — update patient
  - `DELETE /api/patients/:id` — delete patient

- **Prescriptions:**

  - `GET /api/prescriptions` — list prescriptions
  - `GET /api/prescriptions/:id` — get prescription by id
  - `POST /api/prescriptions` — create prescription
  - `PUT /api/prescriptions/:id` — update prescription
  - `DELETE /api/prescriptions/:id` — delete prescription

- **Prescription Items:**
  - `GET /api/prescription-items` — list prescription items
  - `GET /api/prescription-items/:id` — get item by id
  - `POST /api/prescription-items` — create item
  - `PUT /api/prescription-items/:id` — update item
  - `DELETE /api/prescription-items/:id` — delete item

Notes

- The server mounts routes in `index.js` under the `/api` prefix.
- Replace `<APPLICATION_PORT>` with the value from `src/configs/ApplicationConfiguration.js`.
