const express = require("express")
const { CreateImage, getAllImage, DeleteImage, getAuthuserCard } = require("../controller/cardController")
const Authorizaton = require("../controller/Authorization")
const patientAuthentication = require("../controller/PatientAuthentication")

const router = express.Router()

router.post("/createimage" , patientAuthentication ,CreateImage)
router.get("/allimages" , getAllImage)
router.delete("/deleteimage/:id" , DeleteImage)
router.get("/getauthusercard" , patientAuthentication , getAuthuserCard)

module.exports = router