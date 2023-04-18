import mongoose from "mongoose"
import bcrypt from "bcrypt"
import User from "./user.js"

mongoose.connect("mongodb://omar:omar696798100@192.168.1.200:2717/?authMechanism=DEFAULT")

const user = new User({
  username: "admin",
  password: bcrypt.hashSync("admin", 10)
}).save().then(() => {
  console.log("user created")
}).catch((err) => {
  console.log(err)
})