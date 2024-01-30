const { Schema, model } = require('mongoose')

const ArtistSchema = new Schema({
  name: {type: String, require: true, unique: true},
  title: {type: String, require: true, unique: true},
  n1: {type: Number, require:true},
  n2: {type: Number, require:true},
  n3: {type: Number, require:true},
  timeStamp: {type: Date, default: Date.now}
})

const artistModel = model('Artist', ArtistSchema)
module.exports = artistModel