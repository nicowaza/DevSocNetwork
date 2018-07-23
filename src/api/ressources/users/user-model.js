import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
})


export default mongoose.model('User', userSchema)
