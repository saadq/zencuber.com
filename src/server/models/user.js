import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: String,
  password: String,
  solves: [{ type: Schema.Types.ObjectId, ref: 'Solve' }]
})

const User = mongoose.model('User', UserSchema)

export default User
