let express = require("express")
let router = express.Router()
let genreController = require("../app/controllers/genreController")

// [GET] /genre/:genreID
router.get("/:genreID", genreController.index)


module.exports = router