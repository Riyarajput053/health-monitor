const reportModel = require("../models/reportmodel.js")

async function createReport  (req , res) {
     
    try {
        const {title , description } = req.body

        if (!title  || !description ){
            return res.json({
                success : false,
                message : "Please fill all the fields"
            })
        }

        const newReport = await reportModel.create({
            title ,
            description
        })
         
        return res.json({
            success : true,
            message : "Report Created",
            newReport
        })
       


    }
    catch (error) {
       return res.json({
           success : false,
           message : "error occured",
           
       })
    }


}

module.exports = {createReport}