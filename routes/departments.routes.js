const express = require('express');
const router = express.Router();

const DepartmentControler = require('../controllers/departments.controller');

router.get('/departments', DepartmentControler.getAll);

router.get('/departments/random', DepartmentControler.getRandom);

router.get('/departments/:id', DepartmentControler.getDocument);

router.post('/departments', DepartmentControler.postDocument);

router.put('/departments/:id', DepartmentControler.putDocument);

router.delete('/departments/:id', DepartmentControler.deleteDocument);

module.exports = router;