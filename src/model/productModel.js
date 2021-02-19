var mongoose = require('mongoose');
var productSchema =mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true 
    },
    create_date : {
        type : Date,
        default : Date.now
    }
});
var Product = module.exports = mongoose.model('product', productSchema);
module.exports.get = function(callback, limit) {
    Product.find(callback).limit(limit);
}
