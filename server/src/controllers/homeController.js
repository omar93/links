const homeController = {}

homeController.index = (req, res) => {
  res.send("Home route get request")
}

export default homeController