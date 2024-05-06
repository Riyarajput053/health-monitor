const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    dob : Date,
    gender : String,
    contactnumber : String,
    email : String,
    address : String,

    doctorId : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "doctorInfo"
        }
    ],
    reports : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "card"
        }
    ]

} , {timeseries: true})

module.exports = mongoose.model("patientInfo" , patientSchema)