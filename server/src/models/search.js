var mongoose = require('mongoose')
var Schema = mongoose.Schema
var SearchSchema = new Schema({
  user: {type: Schema.ObjectId, ref: 'User', required: true},
  content: {type: String, min: 1, max: 1000, required: true},
  created: {type: Date, default: Date.now()},
  results: [{type: Schema.ObjectId, ref: 'Post'}]
})

SearchSchema.virtual('url').get(function () {
  return '/search/' + this._id
})

module.exports = mongoose.model('Search', SearchSchema)