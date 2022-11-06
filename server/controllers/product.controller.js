const { Product } = require('../models/product.model');

module.exports.index = (req,res) => {
    res.json({
        message: "hiya"
    });
}

module.exports.createProduct =(req,res) => {
    console.log(req.body)
    // res.json("here you go")
    Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct }))
        .catch( err => res.json({ message: 'Something went wrong'} ));    
}