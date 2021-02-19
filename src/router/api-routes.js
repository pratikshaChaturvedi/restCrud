let router = require('express').Router();
router.get('/', function(req,res) {
    res.json({
        status : 'API is working.',
        message : 'Welcome to restcrud!'
    });
});
var productController = require('../controller/productController.js');
router.route('/products')
    .get(productController.index)
    .post(productController.new);
router.route('/products/:product_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);
module.exports = router;