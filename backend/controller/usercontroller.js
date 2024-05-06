const patientModel = require("../models/patientModel.js")
const userModel = require("../models/userModel.js")
const usermodel = require("../models/userModel.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const register = async(req,res) => {
    try {
        const {username,email,password} = req.body
        console.log(req.body)

        //check user exist or not
        const userExist = await usermodel.findOne({
            email : email
        })
        if(userExist){
            return res.json({
                success : false,
                message : "user already exist"
            })
        }

        // password hashing

        const salt = await bcrypt.genSalt(10)

        const hashPassword = await bcrypt.hash(password,salt)

        const createUser = await usermodel.create({
            username,email,password:hashPassword
        })
        // token generation
        const token = jwt.sign({userId : createUser._id} , process.env.JWT_SECRET)
        console.log(token)

        res.cookie("authToken" , token)

        return res.json({
            success : true,
            message : "user created successfully",
            createUser
        })


    } catch (error) {
        return res.json({
            success : false,
            message : error.message
        })
    }
}


const registerDoc = async(req,res) => {
    try {
        const {username,email,password} = req.body
        console.log(req.body)

        //check user exist or not
        const userExist = await usermodel.findOne({
            email : email
        })
        if(userExist){
            return res.json({
                success : false,
                message : "user already exist"
            })
        }

        // password hashing

        const salt = await bcrypt.genSalt(10)

        const hashPassword = await bcrypt.hash(password,salt)

        const createUser = await usermodel.create({
            username,email,password:hashPassword
        })
        // token generation
        const token = jwt.sign({userId : createUser._id} , process.env.JWT_SECRET)
        console.log(token)

        res.cookie("authToken" , token)

        return res.json({
            success : true,
            message : "user created successfully",
            createUser
        })


    } catch (error) {
        return res.json({
            success : false,
            message : error.message
        })
    }
}

const login = async(req,res) => {
    try {

        const {email,password} = req.body

        const userExist = await userModel.findOne({
            email : email
        })

        if(!userExist){
            return res.status(400).json({
                success : false,
                message : "user does not exist"
            })
        }

        const isMatch = await bcrypt.compare(password, userExist.password)
        if(!isMatch){

            return res.status(400).json({
                success : false,
                message : "Invalid Credentials"
            })
        }

        const token = jwt.sign({userId: userExist._id},process.env.JWT_SECRET)
        res.cookie("authToken", token)

        return res.json({
            success : true,
            message : "user logged in successfully",
            userExist
        })
    } catch (error) {

        return res.json({
            success : false,
            message : error.message
        })
    }
}

const GetAuthUser = async(req,res) => {
    try {
        if(!req.user){
            return res.status(401).json({
                success : false,
                message : "unauthorised access"
            })
        }

        return res.status(200).json({
            success : true,
            message : "Logged In user",
            AuthUser : req.user
        })

    } catch (error) {

        return res.status(500).json({
            success : false,
            message : error.message
        })

    }
}

const logout = async (req,res) => {

    try {
        console.log("object")
        res.cookie("authtoken","")

        return res.status(200).json({
            success : true,
            message : "Logout successfully"
        })

    } catch (error) {

        return res.status(500).json({
            success : false,
            message : error.message
        })

    }
}

const patientInfo = async(req,res) => {
    try {
        const {firstname,lastname,email , dob,gender,contactnumber,address} = req.body

        if (!firstname || !lastname || !dob || !gender || !contactnumber || !address || !email) {
              return res.status(400).json({
                 success : false ,
                 message : "Please fill all the fields"
              })
        }

        const patientExist = await patientModel.findOne ({email})

        if (patientExist){
            return res.status(400).json({
                success : false ,
                message : "patient Already exist"
             })  
        }

        const createPatient = await patientModel.create({
             firstname,
             lastname,
             dob,
             gender,
             contactnumber,
             address,
             email
        })

        if (!createPatient){
            return res.status(400).json({
                success : false ,
                message : "Patient could not be created"
             })
        }

        const token = jwt.sign({patientId : createPatient._id} , process.env.JWT_SECRET , {expiresIn : "7d"})

        console.log(token)

        res.cookie ("patientAuth" , token)

        return res.status(200).json({
             success : true,
             message : "Patient registered successfully",
             createPatient
        })





    } catch (error) {

        return res.json({
            success : false,
            message : error.message

        })
    }
}


const doctorInfo = async(req,res) => {
    try {
        const {firstName,lastName,gender,contactNumber,workplace,patientId,specialisation,qualification,experience,state,city} = req.body

    } catch (error) {

        return res.json({
            success : false,
            message : error.message
            
        })
    }
}



module.exports = { register,login,GetAuthUser,logout,patientInfo,doctorInfo,registerDoc}