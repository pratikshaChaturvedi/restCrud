Product = require('../model/productModel');
exports.index = function(req,res) {
    Product.get(function (err, products) {
        if(err) {
            res.json({
                status : "error",
                message : err,
            });
    }
    res.json({
        status : "success",
        message : "Products retrieved successfully",
        data : products
        });
    });
};
exports.new = function(req,res) {
    var product = new Product();
    product.name = req.body.name ? req.body.name : product.name;
    product.price = req.body.price;
    product.description = req.body.description;
    product.save(function (err){
        res.json({
            message : 'New product added.',
            data : product
        });
    });
};

exports.view = function(req,res) {
    Product.findById(req.params.product_id, function (err, product){
        if(err)
            res.send(err);
        res.json({
            message : 'Product deatils loading......',
            data : product
        });
    });
};
exports.update = function(req,res) {
    Product.findById(req.params.product_id, function(err, product) {
        if(err)
            res.send(err);
    product.name = req.body.name ? req.body.name : product.name;
    product.price = req.body.price;
    product.description = req.body.description;
    product.save(function (err){
        if(err)
            res.json(err);
        res.json({
            message : 'Product information updated.',
            data : product
        });
    });
});
};
exports.delete = function(req,res) {
    Product.remove({
        _id : req.params.product_id
    }, function(err, product) {
        if(err)
            res.send(err);
        res.json({
            status : "Success",
            message : 'Product Deleted'
        });
    });
};