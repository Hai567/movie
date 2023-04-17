let express = require("express")
let router = express.Router()
let userController = require("../app/controllers/userController")

router.get("/profile/:stringedID", userController.userProfile)


module.exports = router