const mongoose = require("mongoose")

const CardSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String
    },
    patientId : {
         type : mongoose.Schema.Types.ObjectId,
         ref : "patientInfo"
    }
} , {timestamps : true})

module.exports = mongoose.model("card" , CardSchema)