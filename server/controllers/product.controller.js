const { Product } = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: "hiya"
    });
}

module.exports.createProduct = (req, res) => {
    console.log(req.body)
    Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct }))
        .catch( err => res.json({ message: 'Something went wrong', error: err} ));    
}

module.exports.findAll = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json(allProducts);
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.findOne = (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            res.json(product)
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}