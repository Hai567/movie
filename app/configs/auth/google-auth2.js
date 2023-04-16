let GoogleStrategy = require('passport-google-oauth20').Strategy
let User = require("../../models/UserModel")
let passport = require("passport")

module.exports = function initGoogleAuth2() {  
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
      },
      function(accessToken, refreshToken, profile, cb) {
        let JSONedProfile = profile._json
        User.findOrCreate({ 
            googleId: profile.id,
            loginType: "Google",
            displayName: JSONedProfile.name,
            photo: JSONedProfile.picture,
            email: JSONedProfile.email
        }, function (err, user) {
          return cb(err, user)
        })
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