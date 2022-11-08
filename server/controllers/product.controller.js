const { Product } = require('../models/product.model');

// Creates a new product instance
module.exports.createProduct = (req, res) => {
    // console.log(req.body)
    Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct }))
        .catch( err => res.json({ message: 'Something went wrong', error: err} ));    
}

// Finds all products and returns the array
module.exports.findAll = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json(allProducts);
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

// Finds one product by its ID
module.exports.findOne = (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            res.json(product)
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

// Updates one product by its ID
module.exports.updateOne = (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true, runValidators: true}
    )
    .then( updatedProduct => {
        res.json(updatedProduct)
    } )
    .catch(err => res.json({message: "Something went wrong", error: err}));
}

// Deletes one product by its ID
module.exports.deleteOne = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then( deletedProduct => {
            res.json({deletedProduct: deletedProduct})
        })
        .catch(err => res.json({message: "Something went wrong", error: err}));
}