var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ToolCategorySchema = new Schema({
  name: {type: String, default: 'Sách'}
})

module.exports = mongoose.model('ToolCategory', ToolCategorySchema)