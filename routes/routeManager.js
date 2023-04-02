let siteRouter = require("./siteRouter")
let searchFilmRouter = require("./searchFilmRouter")
let genreRouter = require("./genreRouter")

let router = function (app){

    app.use("/search", searchFilmRouter)
    app.use("/genre", genreRouter)
    app.use("/", siteRouter)

}

module.exports = router