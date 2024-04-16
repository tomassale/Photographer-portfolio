import { Schema, model, mongoose } from 'mongoose'

const ArtistSchema = new Schema({
  _id: {
    type: mongoose.Schema.ObjectId, 
    default:mongoose.Types.ObjectId, 
    index: true, 
    require: true,
    unique: true
  },
  name: {type: String, require: true, unique: true},
  title: {type: String, require: true, unique: true},
  n1: {type: Number, require:true},
  n2: {type: Number, require:true},
  n3: {type: Number, require:true},
  timeStamp: {type: Date, default: Date.now}
})

const artistModel = model('Artist', ArtistSchema)
export default artistModel