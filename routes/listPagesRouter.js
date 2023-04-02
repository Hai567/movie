let express = require("express")
let router = express.Router()
let listPageController = require("../app/controllers/listPagesController")

router.get("/:slug", listPageController.index)

module.exports = router