let express = require("express")
let router = express.Router()
let genreController = require("../app/controllers/genreController")


router.get("/:genreID", genreController.index)


module.exports = router