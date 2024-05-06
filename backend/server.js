const path = require("path")
const express = require("express")
require ("dotenv").config()
const app = express()
const report = require("./routes/reportRoute.js")
const cors = require("cors")
const DataBase = require("./configuration/connectDB.js")
const userRouter = require("./routes/userRouter.js")
// const mongoose = require("mongoose")
const port = process.env.PORT || 8000
const cookieParser = require("cookie-parser")
const CardRouter = require("./routes/CardRoute.js")
const multer = require("multer")

// const port = process.env.PORT

DataBase()

//middleware
app.use(cors({
    origin : ["http://localhost:3000" , "http://localhost:3001"],
    credentials : true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use("/report", report)
app.use("/User", userRouter)
app.use("/api/cards", CardRouter)


//image uploadation using multer
const storage = multer.diskStorage({
    destination : "./uploads/images",
    filename : (req, file , cb) =>{
    
        return cb(null , `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }
})

const upload = multer({storage : storage})


//Middleware
app.use("/images" , express.static("uploads/images"))

app.post("/upload" , upload.single("thumbnail") , function(req,res){
    console.log(req.file)
    res.json({
        success : true,
        image_url : `http://localhost:${port}/images/${req.file.filename}`
    })
})


app.listen(port , ()=>{
    console.log(`server is running on ${port}`)
})