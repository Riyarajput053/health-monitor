import React, { useState } from "react";
import Navbar from "./Functions/Navbar";
import Folder from "./Functions/Folder";
import EditBtn from "./Functions/EditBtn";

const PatHealthHistory = () => {
  const handleEdit = (newValue) => {
    console.log("New value:", newValue);
  };

  return (
    <div>
      <Navbar authUser={true} />
      <div className="container">
        <div
          className="bar"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow:
              "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

            minWidth: "100rem",
          }}
        >
          <Folder title="Basic details">
          <div className="row">
              <div className="col border">
                <label className=" d-flex align-content-left " style={{color:"#008B8B"}}>Name</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
              <div className="col border">
              <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Age</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
            </div>
          <div className="row">
              <div className="col border">
                <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Weight</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
              <div className="col border">
              <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Height</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
            </div>
            <div className="row">
              <div className="col border">
                <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Gender</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
              <div className="col border">
              <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Mediclaim Policy Number</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
            </div>
              <div className="row">
              <div className="col border">
                <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Blood Group</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
              <div className="col border">
              <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Emergency Contact</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
            </div>
          </Folder>
        </div>

        <div
          className="bar mt-4"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow:
              "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            minWidth: "100rem",
          }}
        >
          <div className="d-flex, justify-content-right">
            <Folder title="Medical Data">
            <div className="row">
              <div className="col border">
                <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Chronic Conditions</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
              <div className="col border">
              <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Allergies</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
            </div>
            <div className="row">
              <div className="col border">
                <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Past Surgeries </label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
              <div className="col border">
              <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Past illness</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
            </div>
            <div className="row">
              <div className="col border">
                <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Fasting Blood Sugar</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
              <div className="col border">
              <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Random Blood Sugar</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
            </div>
            </Folder>
          </div>
        </div>

        <div
          className="bar mt-4"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow:
              "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            minWidth: "100rem",
          }}
        >
          <Folder title="Lifestyle details">
            <div className="row">
              <div className="col border">
                <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Smoking</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
              <div className="col border">
              <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Alcohol Consumption</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
            </div>
            <div className="row">
              <div className="col border">
                <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Tobacco Chewing</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
              <div className="col border">
              <label className=" d-flex align-content-left" style={{color:"#008B8B"}}>Diet type (Vegiterian or Non-Vegiterian)</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
            </div>
          </Folder>
        </div>

        <div
          className="bar mt-4"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow:
              "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            minWidth: "100rem",
          }}
        >
          <Folder title="Family health history">
          <div className="row">
              <div className="col border">
                <label className=" d-flex align-content-left">Hisotry Of Cancer</label>
                <EditBtn
                  initialValue=""
                  onEdit={handleEdit}
                />
              </div>
              <div className="col border">
              <label className=" d-flex align-content-left">Chronic conditions in family</label>
                <EditBtn
                  initialValue="This is editable text"
                  onEdit={handleEdit}
                />
              </div>
            </div>
          </Folder>
        </div>
      </div>
    </div>
  );
};

export default PatHealthHistory;
