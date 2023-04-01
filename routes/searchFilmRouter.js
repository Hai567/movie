let express = require("express")
let router = express.Router()
let searchFilmController = require("../app/controllers/searchFilmController")

router.post("/", searchFilmController.index)

module.exports = router