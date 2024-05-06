const mongoose = require("mongoose")

const reportStructure = new mongoose.Schema({

    title : {
        type : String,
        required : true
     },
     description : {
        type : String,
        required : true
     }
     
 },{timestamps : true})



const reportModel = mongoose.model("report", reportStructure)
module.exports = reportModel