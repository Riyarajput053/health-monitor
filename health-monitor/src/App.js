import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
// import Register from "./components/Register";
import PatientInfo from "./components/PatientInfo";
import DoctorInfo from "./components/DoctorInfo";
import PatientDashboard from "./components/PatientDashboard";
// import DoctorDashboard from './components/DoctorDashboard';
import About from "./components/About";
import AddPrescriptions from "./components/AddPrescriptions";
import ViewPrescription from "./components/ViewPrescription";
import Edit from "./components/notused/Edit";
import Prediction from "./components/Prediction";
import PrivateRoute from "./components/Functions/PrivateRoute";
import HomeSections from "./components/Functions/HomeSections";
import Footer from "./components/Functions/Footer";
import Features from "./components/Features";
import howItWorks from "./components/howItWorks";
import Register from "./components/Register";
import RegisterDoc from "./components/RegisterDoc";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ViewRecords from "./components/ViewRecords";
import ViewPrescriptions from "./components/ViewPrescription";
import ViewImaging from "./components/ViewImaging";
import ViewDocNotes from "./components/ViewDocNotes";
import ViewMedExpense from "./components/ViewMedExpense";
import ViewVaccination from "./components/ViewVaccination";
import AddRecords from "./components/AddRecords";
import AddDocNotes from "./components/AddDocNotes";
import AddImaging from "./components/AddImaging";
import AddMedExpense from "./components/AddMedExpense";
import AddVaccination from "./components/AddVaccination";
import Sidebar from "./components/notused/Sidebar";
import Navbar from "./components/Functions/Navbar";
import DocDashboard from "./components/DocDashboard";
import MyPatients from "./components/MyPatients";
import PatHealthHistory from "./components/PatHealthHistory";



{
//   <Route path="/register/:type" element={<Register />} /> 
}

const App = () => {




  return (
    <Routes>
  

      <Route path="/" element={<Home />} />

      {/* Login Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/login/doctor" element={<Login type="doctor" />} />
      <Route path="/login/patient" element={<Login type="patient" />} />

      {/* Register Routes */}

      <Route path="/register-patient" element={<Register />} />
      <Route path="/register-doctor" element={<RegisterDoc />} />
      <Route path="doctor-info" element={<DoctorInfo />} />
      <Route path="patient-info" element={<PatientInfo />} />


          


      {/* Dashboard Routes */}
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
      <Route path="/doctor-dashboard" element={<DocDashboard />} />
      {/* <Route path="/doctor-dashboard" element={<DoctorDashboard />} /> */}

      {/* <Route element={<PrivateRoute/>}>
                <Route path='/patient-dashboard' element={<PatientDashboard/>}/>
            </Route> */}


      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Edit />} />
     

      <Route path="/addrecords" element={<AddRecords />} />
      <Route path="/addprescriptions" element={<AddPrescriptions />} />
      <Route path="/adddocnotes" element={<AddDocNotes />} />
      <Route path="/addimaging" element={<AddImaging />} />
      <Route path="/addmedexpense" element={<AddMedExpense />} />
      <Route path="/addvaccination" element={<AddVaccination />} />

      <Route path="/howitworks" element={<howItWorks />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/features" element={<Features />} />
      <Route path="/sidebar" element={<Sidebar />} />


      <Route path="/viewrecords" element={<ViewRecords />} />
      <Route path="/viewprescriptions" element={<ViewPrescription />} />
      <Route path="/viewimaging" element={<ViewImaging />} />
      <Route path="/viewdocnotes" element={<ViewDocNotes />} />
      <Route path="/viewmedexpense" element={<ViewMedExpense />} />
      <Route path="/viewvaccination" element={<ViewVaccination />} />
      <Route path="/prediction" element={<Prediction />} />
      <Route path="/pathealthhistory" element={<PatHealthHistory />} />



      <Route path="/mypatients" element={<MyPatients />} />



    </Routes>
  );
};

export default App;
