'use strict'

const express = require('express');
const controller = require('../controllers/product')
const userController = require('../controllers/user')
const api = express.Router()
const auth = require('../middlewares/auth')
api.get('/product', controller.getProducts);
api.get('/product/:productId', controller.getProduct);
api.post('/product',controller.saveProduct);
api.put('/product/:productId',controller.updateProduct);
api.delete('/product/:productId',controller.deleteProduct );

api.post('/signup', userController.signUp);
api.post('/signin', userController.signIn);
//ej privada para authenticated user
api.get('/private', auth, function(req, res){
    res.status(200).send({msg:'Tienes acceso'})
})
module.exports = api