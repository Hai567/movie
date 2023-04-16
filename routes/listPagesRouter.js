let express = require("express")
let router = express.Router()
let listPageController = require("../app/controllers/listPagesController")

// [GET] /list/genre/:genreName/:genreID
router.get("/genre/:genreName/:genreID", listPageController.forDifferentGenre)
// [GET] /list/:category
router.get("/:category", listPageController.index)

module.exports = router