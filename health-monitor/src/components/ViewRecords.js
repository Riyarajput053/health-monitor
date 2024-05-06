import React from 'react'
import Navbar from './Functions/Navbar'
import { useState, useEffect } from 'react';

function ViewRecords(authUser) {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () =>{
    //fetch api 
  }
  const handleViewRecord = (recordId)=>{
    //show details of records 

  };
  
 
  return (
    <>
    <Navbar authUser={true}/>
    <div className="container">
      <h1>View Records</h1>
      <div className="records-container">
        {records.map(record => (
          <div key={record.id} className="record-card">
            <h2>{record.title}</h2>
            <p>{record.description}</p>
            <button onClick={() => handleViewRecord(record.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ViewRecords
