const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api', ProductController.index);
    app.get('/api/product/:id',ProductController.findOne);
    app.post('/api/product/new',ProductController.createProduct);
    app.get('/api/products/all',ProductController.findAll);
}