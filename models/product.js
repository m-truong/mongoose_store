const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  quantity: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
