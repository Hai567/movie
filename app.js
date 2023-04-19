require('dotenv').config()
let express = require("express")
let app = express()
let PORT = process.env.PORT || 3000
let ejs = require("ejs")
let mongoose = require("mongoose")
let bodyParser = require("body-parser")
let routeManager = require("./routes/routeManager")
let SortMiddleware = require("./app/middlewares/SortMiddleware")
let GetAllGenresMiddleware = require("./app/middlewares/GetAllGenresMiddleware")
let CheckUserAuthenticated = require("./app/middlewares/CheckUserAuthenticatedMiddleware")
let CORSMiddlware = require("./app/middlewares/CORSMiddleware")
let flash = require("connect-flash")
let session = require("express-session")
let passport = require('passport')

mongoose.connect('mongodb://127.0.0.1:27017/movies')
    .then(() => console.log("DB Connected"))
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static("public"))

// Custom Middlewares
app.use(GetAllGenresMiddleware)
app.use(SortMiddleware)
app.use(CheckUserAuthenticated)
app.use(CORSMiddlware)

routeManager(app)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})