const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
	brandName: {type: String, required: true},
	modelName: {type: String, required: true},
	description: {type: String, required: true},
	characteristics: {type: Object, required: true},
	price: {type: String, required: true},
	photo: {type: String, required: true}
},{
  timestamps: true,
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;