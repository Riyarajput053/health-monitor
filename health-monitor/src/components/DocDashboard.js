import { React, useState } from "react";
import Navbar from "./Functions/Navbar";

const DocDashboard = () => {

  return (
    <div>
      <Navbar authUser={true}></Navbar>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h1
          className="display-4"
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "#008B8B",
          }}
        >
          Welcome <br /> Good to see you again!!
        </h1>
        <p style={{ fontFamily: "sans-serif" }}>
          Chose a patient to add or view record
        </p>
      </div>
    </div>
  );
};

export default DocDashboard;
