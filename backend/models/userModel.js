const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password: String,
    confirmPassword: String,
    reports : [
        {
             type : mongoose.Schema.Types.ObjectId,
             ref : "card"
        }
    ]
},{timestamps : true})

module.exports = mongoose.model("User", userSchema)