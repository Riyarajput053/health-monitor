const mongoose = require("mongoose")

const DoctorSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    gender : String,
    conatctNumber : Number,
    address : String,
    experience : String,
    workplace : String,
    qualification : String,
    specialisation : String,
    patientId : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "patientInfo"
        }
    ]

} , {timeseries: true})

module.exports = mongoose.model("doctorInfo" , DoctorSchema)