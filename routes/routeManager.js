let siteRouter = require("./siteRouter")
let searchFilmRouter = require("./searchFilmRouter")

let router = function (app){

    app.use("/", siteRouter)
    app.use("/search", searchFilmRouter)

}

module.exports = router