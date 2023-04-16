let User = require("../models/UserModel")
let bcrypt = require("bcrypt")

class authController {

    // [GET] /auth/login
    login(req, res, next){
        res.render("login")
    }
    // [GET] /auth/register
    register(req, res, next){
        res.render("register")
    }

    // [POST] /auth/register
    async addUser(req, res, next){
        User.findOne({
            email: req.body.email,
            displayName: req.body.name
        })
            .then(async (user) => {
                if (user){
                    console.log("Already user")
                    res.redirect("/auth/register")
                }else{
                    let hashedPassword = await bcrypt.hash(req.body.password, 10)
                    User.create({
                        loginType: "Email and Password",
                        email: req.body.email,
                        displayName: req.body.name,
                        password: hashedPassword
                    })
                    res.redirect("/auth/login")
                }
            })
            .catch(err => console.log("Error encountered in authController.js", err))
    }

}

module.exports = new authController