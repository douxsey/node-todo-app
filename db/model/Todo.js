import mongoose from 'mongoose';
let TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
})


export default mongoose.model('Todo', TodoSchema)