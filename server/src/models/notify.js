var mongoose = require('mongoose')
var Schema = mongoose.Schema
var NotifySchema = new Schema({
  created: {type: Date, default: Date.now()},
  content: {type: String, min: 1, max: 10000, required: true},
  user: {type: Schema.ObjectId, ref: 'User', required: true}
})

NotifySchema.virtual('url').get(function () {
  return '/notify/' + this._id
})

module.exports = mongoose.model('Notify', NotifySchema)