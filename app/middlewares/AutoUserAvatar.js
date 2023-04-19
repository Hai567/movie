let User = require("../models/UserModel")
module.exports = function AutoUserAvatar(){
    User.find({photo: { $ne: null }})
        .then(noPhotoUsers => {
            if (noPhotoUsers.length > 0){
                User.updateMany(
                    {photo: null},
                    {photo: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"}
                )
                .then(result => console.log(result))
                .catch(err => console.log(err))
            }
        })
}