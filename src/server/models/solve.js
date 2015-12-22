import mongoose from 'mongoose'
const Schema = mongoose.Schema

const SolveSchema = new Schema({
  time: String,
  scramble: String,
  date: Date
})

const Solve = mongoose.model('Solve', SolveSchema)

export default Solve
