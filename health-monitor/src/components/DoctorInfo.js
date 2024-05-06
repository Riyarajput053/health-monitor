import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/patientinfo.css";
import axios from "axios";

const PatientInfo = () => {

const [error, setError ] = useState("")

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    gender:"",
    contactNumber:"",
    workplace:"",
    patientId:"",
    specialisation:"",
    qualification:"",
    experience:"",
    state: "",
    city: "",
    // fullName: "",
    // age: "",
    // gender: "",
    // contact: "",
    // qualification: "",
    // workplace: "",
    // experience: "",
  });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  };

  const handleRegister = async () => {
    const res = await axios
      .post("http://localhost:5000/User/register-doctor", formData, {
        withCredentials: true,
      })
      .then((value) => {
        console.log(value.data);
        Navigate("/");
      })
      .catch((err) => {
        console.warn(err);
      });

    if (!formData.firstName || !formData.lastName || !formData.specialisation || !formData.gender || !formData.contactNumber || !formData.workplace || !formData.qualification || !formData.experience || !formData.state || !formData.city) {
      setError("This is the required field !");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
   

    Navigate("/doctor-dashboard");
  };

  return (
    <div className="window">
      <div className="container ">
        <h2 style={{ marginBottom: "20px" }}>Doctor Information</h2>
        <form className="mt-3">
          <div className="row align-items-start">
            <div className="col">
              <div className="form mb-2">
                <label style={{ fontWeight: "500" }}>
                  First name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  required
                />
                <span>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </span>
              </div>
              <div className="form mb-2">
                <label style={{ fontWeight: "500" }}>
                  Last name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  required
                />
                <span>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </span>
              </div>
             

              <div className="form mb-2">
                <label style={{ fontWeight: "500" }}>
                  Gender<span style={{ color: "red" }}>*</span>
                </label>
                <select
                  className=" form-control"
                  required
                  name="gender"
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <span>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </span>
              </div>
              <div className="form mb-2">
                <label style={{ fontWeight: "500" }}>
                  Contact<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="form-control"
                  type="tel"
                  name="contactNumber"
                  onChange={handleChange}
                  required
                />
                <span>
                  {error && (
                    <p style={{ color: "red" }}>{error}</p>
                  )}
                </span>
              </div>

              <div className="form mb-2">
                <label style={{ fontWeight: "500" }}>
                  State<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="state"
                  onChange={handleChange}
                  required
                />
                <span>
                  {error && (
                    <p style={{ color: "red" }}>{error}</p>
                  )}
                </span>
              </div>
              </div>
              <div className="col">
              <div className="form mb-2">
                <label style={{ fontWeight: "500" }}>
                  City<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  onChange={handleChange}
                  required
                  />
                <span>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </span>
              </div>
              
              <div className="form mb-2">
                <label style={{ fontWeight: "500" }}>
                  Qualification<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="qualification"
                  onChange={handleChange}
                  required
                />
                <span>
                  {error && (
                    <p style={{ color: "red" }}>{error}</p>
                  )}
                </span>
                
                <div className="form mb-2 mt-2">
                  <label style={{ fontWeight: "500" }}>
                    Workplace<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="workplace"
                    onChange={handleChange}
                    required
                  />
                  <span>
                    {error && (
                      <p style={{ color: "red" }}>{error}</p>
                    )}
                  </span>
                  <div className="form mb-2 mt-2    ">
                    <label style={{ fontWeight: "500" }}>
                      Experience<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="experience"
                      onChange={handleChange}
                      required
                    />
                    <span>
                      {error && (
                        <p style={{ color: "red" }}>{error}</p>
                      )}
                    </span>
                  </div>
                  <div className="form mb-2 mt-2    ">
                    <label style={{ fontWeight: "500" }}>
                      Specialisation<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="specialisation"
                      onChange={handleChange}
                      required
                    />
                    <span>
                      {error && (
                        <p style={{ color: "red" }}>{error}</p>
                      )}
                    </span>
                  </div>
                </div>
                </div>      
              </div>
          </div>
          <br />
        </form>
        <button className="btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default PatientInfo;
