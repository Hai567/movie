let express = require("express")
let router = express.Router()
let siteController = require("../app/controllers/siteController")

router.get("/", siteController.homePage)

module.exports = router