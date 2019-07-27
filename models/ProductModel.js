const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    imgUrl : String,
    name : String,
    price : String
  
    
}, {timestamps:true});

const Product = mongoose.model('Product',productSchema);

module.exports = {Product}