'use strict'

const express = require('express');
const controller = require('../controllers/product')
const api = express.Router()

api.get('/product', controller.getProducts);
api.get('/product/:productId', controller.getProduct);
api.post('/product',controller.saveProduct);
api.put('/product/:productId',controller.updateProduct);
api.delete('/product/:productId',controller.deleteProduct );

module.exports = api