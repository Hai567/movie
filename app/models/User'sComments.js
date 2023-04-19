let mongoose = require("mongoose")
let Schema = mongoose.Schema

let UsersCommnetsSchema = Schema ({
    userDisplayName: String,
    comments:[{
        movieID: String, 
        comments:[]
    }]
})

module.exports = mongoose.model("UsersComments", UsersCommnetsSchema)