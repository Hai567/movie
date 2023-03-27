let siteRouter = require("./siteRouter")

let router = function (app){

    app.use("/", siteRouter)

}

module.exports = router