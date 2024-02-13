const express = require('express');
const router = express.Router();

const EmployeeControler = require('../controllers/employees.controller');

router.get('/employees', EmployeeControler.getAll);

router.get('/employees/random', EmployeeControler.getRandom);

router.get('/employees/:id', EmployeeControler.getDocument);

router.post('/employees', EmployeeControler.postDocument);

router.put('/employees/:id', EmployeeControler.putDocument);

router.delete('/employees/:id', EmployeeControler.deleteDocument);

module.exports = router;