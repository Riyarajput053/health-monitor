import React from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
// import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const AddDocNotes = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <div className="container-screen">
        <div className="container-box">
          <form>
            <div>
              <h2>Add Doctor Notes</h2>

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
                <i className="fa-solid fa-calendar-days"></i>
                </span>
              </div>
            </div>
              <input
                className="form-control form-control-lg mt-3"
                id="formFileLg"
                type="file"
                required
              />
            </div>
            <div className="form-floating mt-3">
              <textarea
                className="form-control"
                placeholder="Dr. Name"
                id="floatingTextarea"
                required
              ></textarea>
            </div>
            <div className="form-floating mt-3">
              <textarea
                className="form-control"
                placeholder="Description"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
            </div>
            <div className="form-floating mt-3">
              <textarea
                className="form-control"
                placeholder="Condition/illness"
                id="floatingTextarea"
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
              <div className="modal-body">Notes updated successfully !!</div>
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
  );
};

export default AddDocNotes;
