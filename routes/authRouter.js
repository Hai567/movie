let express = require("express")
let router = express.Router()
let passport = require("passport")
let authController = require("../app/controllers/authController")
let initPassportLocal = require("../app/configs/auth/passport-local")
let initGoogleAuth2 = require("../app/configs/auth/google-auth2")

initPassportLocal()
initGoogleAuth2()


router.get("/login", authController.login)
router.get("/register", authController.register)

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/auth/login",
    successRedirect: "/"
}))
router.post("/register", authController.addUser)

router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email", "openid"] }));

router.get("/google/callback", 
  passport.authenticate("google", { 
    failureRedirect: "/login",
    successRedirect: "/"
}))

module.exports = router