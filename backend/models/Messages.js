import mongoose from 'mongoose'

export default mongoose.model('messages', {
  text: String,
  sender: String,
  datetime: String,
  received: Boolean,
})
