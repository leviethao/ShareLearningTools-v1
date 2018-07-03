var mongoose = require('mongoose')
var Schema = mongoose.Schema
var PostCategorySchema = new Schema({
  name: {type: String, default: 'Cung cấp'}
})

module.exports = mongoose.model('PostCategory', PostCategorySchema)