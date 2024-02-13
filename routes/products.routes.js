const express = require('express');
const router = express.Router();

const ProductControler = require('../controllers/products.controller');

router.get('/products', ProductControler.getAll);

router.get('/products/random', ProductControler.getRandom);

router.get('/products/:id', ProductControler.getDocument);

router.post('/products', ProductControler.postDocument);

router.put('/products/:id', ProductControler.putDocument);

router.delete('/products/:id', ProductControler.deleteDocument);

module.exports = router;