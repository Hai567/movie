let express = require("express")
let router = express.Router()
let searchFilmController = require("../app/controllers/searchFilmController")

// [POST] /search/
router.post("/", searchFilmController.index)

module.exports = router