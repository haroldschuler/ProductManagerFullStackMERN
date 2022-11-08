const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/product/:id',ProductController.findOne);
    app.get('/api/products/all',ProductController.findAll);
    app.post('/api/product/new',ProductController.createProduct);
    app.put('/api/edit/:id',ProductController.updateOne);
    app.delete('/api/delete/:id',ProductController.deleteOne);
}