let passport = require("passport")
let User = require("../../models/UserModel")
let FacebookStrategy = require("passport-facebook")


module.exports = function initPassportFacebook(){
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        profileFields: ["id", "displayName", "email", "picture", "gender", "profileUrl"],
      },
      function(accessToken, refreshToken, profile, cb) {
        User.findOne({facebookId: profile.id})
            .then(user => {
                if (!user){
                    User.create({
                        loginStrategy: "Facebook",
                        facebookId: profile.id,
                        displayName: profile.displayName,
                        photo: profile.photos[0].value,
                    })
                    .then((user) => cb(null, user))
                }else{
                    return cb(null, user)
                }
            })
            .catch(err => console.log(err))
      }
    ))

    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser((user, done) => {
        User.findOne({facebookId: user.facebookId})
            .then(user => {
                if (user){
                    done(null, user)
                }else{
                    done(null, false)
                }
            })
            .catch(err => console.log(err))
    })
}