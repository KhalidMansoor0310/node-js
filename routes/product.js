const express = require('express');
const product = express.Router();
const Product = require('../models/Product');

product.get('/allProducts', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({products});
    } catch (err) {
        res.status(500).send(err);
    }
});  
product.post('/newProduct', async (req, res) => {
    try {
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            brand: req.body.brand
        });
        res.status(200).json(`${product.name} Product added Successfully`);
    } catch (error) {
        console.log(error.message)
    }
})

product.put('/updateProduct/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            brand: req.body.brand
        });
        res.status(200).json(`${product.name} Product updated Successfully`);
    } catch (error) {
        console.log(error.message)
    }
})

product.delete('/deleteProduct/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(`${product.name} Product deleted Successfully`);
    } catch (error) {
        console.log(error.message)
    }
})

// search by multiple fields 
product.get('/search/:name/:price/:category/:brand', async (req, res) => {
    try {
        const products = await Product.find({
            name: req.params.name,
            price: req.params.price,
            category: req.params.category,
            brand: req.params.brand
        });
        res.status(200).json({products});
    } catch (err) {
        res.status(500).send(err);
    }
});




module.exports = product;
