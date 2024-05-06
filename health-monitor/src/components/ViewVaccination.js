import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Functions/Navbar';

const ViewVaccination = () => {
  const [vaccine, setVaccine] = useState([]);
  useEffect(() => {
    fetchVaccine();
  }, []);

  const fetchVaccine = async () =>{
    //fetch api 
  }
  const handleViewVaccine = (vaccineId)=>{
    //show details of records 

  };
  return (
    <div>
       <Navbar authUser={true}/>
    <div className="container">
      <h1>View Vaccinations</h1>
      <div className="vaccine-container">
        {/* {vaccine.map(vaccine => (
          <div key={vaccine.id} className="vaccine-card">
            <h2>{vaccine.title}</h2>
            <p>{vaccine.description}</p>
            <button onClick={() => handleViewVaccine(vaccine.id)}>View Details</button>
          </div>
        ))} */}
      </div>
    </div>
      
    </div>
  )
}

export default ViewVaccination
