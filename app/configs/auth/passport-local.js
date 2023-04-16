let passport = require("passport")
let LocalStrategy = require("passport-local").Strategy
let User = require("../../models/UserModel")
let bcrypt = require("bcrypt")

module.exports = function initPassportLocal (){
    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    },
    function (email, password, done) {
        User.findOne({email})
            .then(user => {
                if (user) {
                    bcrypt.compare(password, user.password, function(err, found){
                        if (found){
                            done(null, user)
                        }else{
                            done(null, false)
                        }
                    })
                }else{
                    done(null, false)
                }
            })
            .catch(err => console.log(err))
    }
    ))

    passport.serializeUser(function (user, done) {  
        done(null, user)
    });
    passport.deserializeUser(function (user, done) {  
        User.findOne({email: user.email})
            .then(user => {
                if (user){
                    done(null, user)
                }else{
                    done(null, false)
                }
            })
            .catch(err => console.log(err))
    });
}