var mongoose = require('mongoose')
var Schema = mongoose.Schema
var EventSchema = new Schema ({
  created: {type: Date, default: Date.now()},
  admin: {type: Schema.ObjectId, ref: 'User', required: true},
  content: {type: String, min: 1, max: 10000, required: true},
  users: [{type: Schema.ObjectId, ref: 'User', required: true}]
})

EventSchema.virtual('url').get(function () {
  return '/event/' + this._id
})

module.exports = mongoose.model('Event', EventSchema)