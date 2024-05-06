import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddPrescriptions() {

  const [selectedDate, setSelectedDate] = useState(null);

    const navigate = useNavigate()
    const [imageDetails , setImageDetails] = useState({})
    const [image , setImage] = useState(null)

    const handleChange = (e) => {
        setImageDetails({...imageDetails , [e.target.title] : e.target.description})
    }


    const handleSubmit = async(e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("thumbnail" , image)
        let Card = imageDetails

        const res = await axios.post("http://localhost:5000/upload" , formData)
        .then((value) =>{
            console.log(value.data)
            Card.image = value.data.image_url
            console.log(Card)
        })
        .catch((error) => {
            console.log(error)
        })

        const res1 = await axios.post("http://localhost:5000/api/cards/createimage" , Card)
        .then((value) => {
            console.log(value.data)
            navigate("/viewprescriptions")

        })
        .catch((error) =>{
            console.log(error)
        })
    }
  return (
    <div>
      <div className="container-screen">
        <div className="container-box">
          <form onSubmit={handleSubmit}>
            <div>
              <h2>Add Prescriptions</h2>
              
              <div className="input-group mt-5  "style={{display:'flex', alignItems:'center', justifyContent:'center'}} >
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Date"
                className="form-control"
                dateFormat="dd/MM/yyyy"

              />
              <div className="input-group-append">
                <span className="input-group-text">
                <i class="fa-solid fa-calendar-days"></i>
                </span>
              </div>
            </div>

              <input
                class="form-control form-control-lg mt-3"
                id="formFileLg"
                type="file"
                onChange={(e)=>setImage(e.target.files[0])}
                required
              />
            </div>
            <div class="form-floating mt-3">
              <textarea
                class="form-control"
                placeholder="Dr. Name"
                id="floatingTextarea"
                onChange={handleChange}

                required
              ></textarea>
            </div>
            <div class="form-floating mt-3">
              <textarea
                class="form-control"
                placeholder="Hospital Name"
                onChange={handleChange}

                id="floatingTextarea"
                required
              ></textarea>
            </div>
            <div class="form-floating mt-3">
              <textarea
                className="form-control"
                placeholder="Description"
                id="floatingTextarea2"
                onChange={handleChange}

                style={{ height: "100px" }}
              ></textarea>
            </div>
        
            <div class="form-floating mt-3">
              <textarea
                class="form-control"
                placeholder="Condition/illness"
                id="floatingTextarea"
                onChange={handleChange}

              ></textarea>
            </div>
            <button
              type="button"
              className="btn mt-5"
              id="button"
              style={{ padding: ".5rem" }}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
             
            >
              Continue
            </button>{" "}
            </form>
            </div>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-footer">
                  <div className="modal-body">
                  Prescriptions updated successfully !!
                    
                  </div>
                  <Link to="/patient-dashboard">
                <button type="button" className="btn " data-bs-dismiss="modal">
                  Ok 
                </button>
                </Link>
              </div>
                </div>
              </div>
            </div>
    
    </div>
  )
}

export default AddPrescriptions
