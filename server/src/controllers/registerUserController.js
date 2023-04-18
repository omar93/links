import mongoose from 'mongoose'

const homeController = {}

homeController.index = (req, res) => {
  res.send("register user get request")
}

homeController.indexPost = (req, res) => {
  res.send("you have posted to register user")
}

export default homeController