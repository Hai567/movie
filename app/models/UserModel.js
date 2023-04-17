let mongoose = require("mongoose")
let Schema = mongoose.Schema
let findOrCreate = require("mongoose-findorcreate")

let UserSchema = new Schema({
    loginStrategy: String,
    googleId: String,
    facebookId: String,
    loginType: String,
    displayName: String,
    email: String, 
    password: String,
    photo: String
})
UserSchema.plugin(findOrCreate)
module.exports = mongoose.model("Users", UserSchema)