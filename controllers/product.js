'use strict'
const Product = require('../models/product');

function getProduct (req, res){
    let productId = req.params.productId;

    Product.findById(productId, (err, product)=>{
        if(err) return res.status(500).send({message: `error ${err}`})
        if (!product) return res.status(404).send({message:'el producto no existe'})
        res.status(200).send({product})
    })
}
//GETID
function getProducts(req,res){
    Product.find({}, (err, products)=>{
        if(err) return res.status(500).send({message: `error ${err}`})
        if (!products) return res.status(404).send({message:'el producto no existe'})
        res.status(200).send({products})
    })
}

function saveProduct(req,res) {
    let product =new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStored)=>{
        if(err) res.status(500).send({message: `error ${err}`})
        res.status(200).send({product: productStored})
    });
}

function updateProduct(req,res){
    let productId = req.params.productId;
    //campos que vamos a actualizar estan dentro del body
    let bodyUpdate = req.body;

    Product.findByIdAndUpdate(productId, bodyUpdate, {new: true}, (err, productUpdate) =>{
        if(err) return res.status(500).send({message: `error al actualizar ${err}`})
        res.status(200).send( {product: productUpdate})
        })
}

function deleteProduct(req,res){
    let productId = req.params.productId;

    Product.findById(productId, (err, product)=>{
        if(err) return res.status(500).send({message: `error ${err}`})

        product.deleteOne(err =>{
            if(err) return res.status(500).send({message: `error ${err}`})
            res.status(200).send({message: `Producto eliminado`})
        })
    })
}

module.exports ={
getProduct,
getProducts,
updateProduct,
deleteProduct,
saveProduct
}