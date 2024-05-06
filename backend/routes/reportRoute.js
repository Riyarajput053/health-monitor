const express = require("express")
const {  createReport } = require("../controller/reportcontroller")

const router = express.Router()

router.post("/createreport",createReport)
module.exports = router