require('dotenv').config()
let express = require("express")
let { json } = require("stream/consumers")
let app = express()
let PORT = process.env.PORT || 3000
let ejs = require("ejs")
let mongoose = require("mongoose")
let bodyParser = require("body-parser")
let routeManager = require("./routes/routeManager")
let SortMiddleware = require("./app/middlewares/SortMiddleware")
let slugify = require("slugify")


app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static("public"))

app.use(SortMiddleware)
routeManager(app)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})