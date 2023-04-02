let siteRouter = require("./siteRouter")
let searchFilmRouter = require("./searchFilmRouter")
let genreRouter = require("./genreRouter")
let listPageRouter = require("./listPagesRouter")

let router = function (app){

    app.use("/list", listPageRouter)
    app.use("/search", searchFilmRouter)
    app.use("/genre", genreRouter)
    app.use("/", siteRouter)

}

module.exports = router