let express = require("express")
let router = express.Router()
let siteController = require("../app/controllers/siteController")

// [GET] /movie/watch/:movieID
router.get("/movie/watch/:movieID", siteController.movieDetails)
// [GET] /tv/watch/:tvID
router.get("/tv/watch/:tvID")
// [GET] /
router.get("/", siteController.homePage)

module.exports = router