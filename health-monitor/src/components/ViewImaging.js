import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Functions/Navbar';
const ViewImaging = () => {
  const [scan, setScan] = useState([]);
  useEffect(() => {
    fetchScan();
  }, []);

  const fetchScan = async () =>{
    //fetch api 
  }
  const handleViewScan = (scanId)=>{
    //show details of records 


  };
  return (
    <div>
       <Navbar authUser={true}/>
    <div className="container">
      <h1>View X-rays, CT-scans etc.</h1>
      <div className="scan-container">
        {scan.map(scan => (
          <div key={scan.id} className="scan-card">
            <h2>{scan.title}</h2>
            <p>{scan.description}</p>
            <button onClick={() => handleViewScan(scan.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default ViewImaging
