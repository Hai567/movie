let express = require("express")
let router = express.Router()
let listPageController = require("../app/controllers/listPagesController")

router.get("/genre/:genreName/:genreID", listPageController.forDifferentGenre)
router.get("/:category", listPageController.index)

module.exports = router