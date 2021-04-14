const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//structure
const productSchema = new Schema({
  name: String,
  picture: String,
  price: {type:Number,default:0},
  category:{type:String, enum:['computers','phones','accesories']},
  description: String
});

// convertModel
module.exports = mongoose.model('Product', productSchema);
