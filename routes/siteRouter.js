let express = require("express")
let router = express.Router()
let siteController = require("../app/controllers/siteController")

router.get("/movie/watch/:movieID", siteController.movieDetails)
router.get("/tv/watch/:tvID")
router.get("/", siteController.homePage)

module.exports = router