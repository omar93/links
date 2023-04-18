import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    createdAt: Date,
    updatedAt: Date
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  collation: 'users'
})

const User = mongoose.model("User", UserSchema)

export default User
