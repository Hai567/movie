let express = require("express")
let router = express.Router()
let passport = require("passport")
let authController = require("../app/controllers/authController")
let initPassportLocal = require("../app/configs/auth/passport-local")
let initGoogleAuth2 = require("../app/configs/auth/google-auth2")
let initPassportFacebook = require("../app/configs/auth/passport-facebook")

initPassportLocal()
initGoogleAuth2()
initPassportFacebook()

// Register
router.get("/register", authController.register)
router.post("/register", authController.addUser)

// [Login] Passport Local
router.get("/login", authController.login)
router.post("/login", passport.authenticate("local", {
    failureRedirect: "/auth/login",
    successRedirect: "/"
}))

// [Login] Google Auth2
router.get("/google", passport.authenticate("google", { 
    scope: ["profile", "email", "openid"] 
  }));
router.get("/google/callback", 
  passport.authenticate("google", { 
    failureRedirect: "/login",
    successRedirect: "/"
}))

// [Login] Passport Facebook
router.get("/facebook", passport.authenticate("facebook"));
router.get("/facebook/callback",
  passport.authenticate("facebook", { 
    failureRedirect: "/login",
    successRedirect: "/"
}));

// [Login] Passport Twitter

router.get("/logout", authController.logout)

module.exports = router