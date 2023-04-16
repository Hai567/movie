let siteRouter = require("./siteRouter")
let searchFilmRouter = require("./searchFilmRouter")
let genreRouter = require("./genreRouter")
let listPageRouter = require("./listPagesRouter")
let authRouter = require("./authRouter")
let userRouter = require("./userRouter")

let router = function (app){

    app.use("/list", listPageRouter)
    app.use("/search", searchFilmRouter)
    app.use("/genre", genreRouter)
    app.use("/auth", authRouter)
    app.use("/user", userRouter)
    app.use("/", siteRouter)

}

module.exports = router