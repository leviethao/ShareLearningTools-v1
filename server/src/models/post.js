var mongoose = require('mongoose')
var Schema = mongoose.Schema
var PostSchema = new Schema({
  created: {type: Date, default: Date.now()},
  content: {type: String, min: 1, max: 10000, required: true},
  exchange_condition: {type: String, default: ''},
  poster: {type: Schema.ObjectId, ref: 'User', required: true},
  post_category: {type: Schema.ObjectId, ref: 'PostCategory', required: true},
  tool_category: {type: Schema.ObjectId, ref: 'ToolCategory', required: true},
  followers: [{type: Schema.ObjectId, ref: 'User'}],
  comments: [{type: Schema.ObjectId, ref: 'Comment'}]
})

PostSchema.virtual('url').get(function () {
  return '/post/' + this._id
})

module.exports = mongoose.model('Post', PostSchema)