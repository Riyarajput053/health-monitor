import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../style/register.css"; // Importing your custom CSS file
import axios from "axios";

const Register = () => {
  const Navigate = useNavigate();
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [strength, setstrength] = useState("");
  const [registerRoute, setRegisterRoute] = useState("");
  const params = useParams();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
try{
    const res = await axios
      .post("http://localhost:5000/User/register-patient", formData, {
        withCredentials: true,
        
      });if(res.data.success){
        setRegisterRoute(params.path);
        localStorage.setItem(registerRoute, params.path)
        Navigate('/patient-info')
      }else{
        // console.log(value.data);
        Navigate("/");
      }

      
    }catch(err) {
        console.warn(err);
      };

    if (!formData.email) {
      setEmailError("email is required");
      setTimeout(() => {
        setEmailError("");
      }, 2000);
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setEmailError("Please Check the format of email");
      setTimeout(() => {
        setEmailError("");
      }, 2000);
      return;
    }

    if (formData.email != formData.email.toLowerCase()) {
      setEmailError("Email must be in lowerCase");
      setTimeout(() => {
        setEmailError("");
      }, 2000);
      return;
    }

    if (!formData.password) {
      setPassError("password is required");
      setTimeout(() => {
        setPassError("");
      }, 2000);
      return;
    }
    if (formData.password.match(/[a-z]+/)) {
      setstrength(strength + 1);
    } else {
      setPassError("Password should contain lower case");
      setTimeout(() => {
        setPassError("");
      }, 2000);
      return;
    }

    if (formData.password.match(/[A-Z]+/)) {
      setstrength(strength + 1);
    } else {
      setPassError("Password should contain upper case");
      setTimeout(() => {
        setPassError("");
      }, 2000);
      return;
    }

    if (formData.password.match(/[0-9]+/)) {
      setstrength(strength + 1);
    } else {
      setPassError("Password should contain numeric value");
      setTimeout(() => {
        setPassError("");
      }, 2000);
      return;
    }

    if (formData.password.match(/[$@#&!]+/)) {
      setstrength(strength + 1);
    } else {
      setPassError("Password should contain special characters");
      setTimeout(() => {
        setPassError("");
      }, 2000);
      return;
    }

    console.log(formData.password.length);

    if (formData.password.length < 8) {
      setPassError("Password must have atleast 8 characters");
      setTimeout(() => {
        setPassError("");
      }, 2000);
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      setError("Both password should match");
      setFormData({ ...formData, confirmPassword: "" });
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
   
  };

  const handleClick = () =>{
    Navigate('/register-doctor')
  }

  const handleForgotPassword = () => {
    // Implement the logic for handling forgot password
    // This typically involves sending a password reset email to the user's email address
    console.log("Forgot Password clicked");
    // You would send a request to your backend to handle the password reset process
    // For this example, let's just show an alert
    alert("A password reset link has been sent to your email.");
  };

  return (
    <>
      <div
        id="login-container"
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#008B8B",
        }}
      >
        <div id="login-container-box">
          <div
            id="logo"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="img-fluid"
              src="https://media.licdn.com/dms/image/C560BAQGYYuRNc51wog/company-logo_200_200/0/1631381718986?e=2147483647&v=beta&t=-MWTZKj5QY0ahW6nF-DYGuicq8LPa8DeKofynMt6DPI"
              alt="Health Monitor Logo"
            />
          </div>
          <div id="login-box">
            <button className="reg-btn1" >Register as Patient </button>
            <button className="reg-btn2"onClick={handleClick}>Register as Doctor </button>

            <h2 id="login">Register as Patient</h2>
            <form id="form" onSubmit={handleSubmit}>
              <div className="mb-3">
              <span>
                  <i className="fa-solid fa-envelope fa-lg icon "></i>
                </span>
                <label for="exampleFormControlInput1" className="form-label" style={{fontWeight:'500'}}>
                  &emsp;Email address
                </label>

                <input
                  className="form-control"
                  id="exampleFormControlInput1"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              <div>
              <span>
                <i className="fa-solid fa-key fa-lg icon"></i>
                </span>
                <label for="inputPassword5" className="form-label"style={{fontWeight:'500'}}>
                  &emsp;Password:
                </label>
                <input
                  id="inputPassword5"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <div id="passwordHelpBlock" className="form-text" style={{color:'GrayText'}}>
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </div>

                {passError && <p style={{ color: "red" }}>{passError}</p>}
              </div>
              <br/>
              <div>
              <span>
                <i className="fa-solid fa-key fa-lg icon"></i>
                </span>
                <label for="inputPassword5" className="form-label" style={{fontWeight:'500'}}>
                  &emsp;Confirm Password:
                </label>
                <input
                  id="inputPassword5"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  type="password"
                  name="confirmpassword"
                  onChange={handleChange}
                  required
                />

                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
              <button id="button" type="submit" >
                Register
              </button>
            </form>
            <br />
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
