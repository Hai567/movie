let express = require("express")
let router = express.Router()
let siteController = require("../app/controllers/siteController")

router.get("/watch/:movieID", siteController.movieDetails)
router.get("/", siteController.homePage)

module.exports = router