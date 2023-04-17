let mongoose = require("mongoose")
let User = require("../models/UserModel")
class userController {

    async userProfile (req, res, next){
        if (req.isAuthenticated()){
            User.findOne({_id: new mongoose.Types.ObjectId(req.params.stringedID)})
                .then(user => {
                    res.render("user", {user})
                })
        }else{
            res.redirect("/auth/login")
        }
    }

}

module.exports = new userController