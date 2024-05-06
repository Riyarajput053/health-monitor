const express = require("express");
const {
  register,
  login,
  logout,
  GetAuthUser,
  patientInfo,
  doctorInfo,
  registerDoc,
 
} = require("../controller/usercontroller");
const Authorizaton = require("../controller/Authorization");
const router = express.Router();


router.post("/register-patient", register);
router.post("/register-doctor", registerDoc);
router.post("/login", login);
router.get("/authuser", Authorizaton, GetAuthUser);
router.get("/logout", Authorizaton, logout);
router.post("/patientInfo", patientInfo);
router.get("/doctorInfo", Authorizaton, doctorInfo);

module.exports = router;
