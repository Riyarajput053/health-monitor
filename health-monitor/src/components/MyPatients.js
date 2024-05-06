import React, { useEffect, useState } from 'react'
import axios from 'axios'


const MyPatients = () => {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);


    useEffect(()=>{
        fetchPatients();
    })

    const fetchPatients = () =>{
//         try{
//         const res = axios.get('')
//         setPatients(response.data);
//     }catch(err){
//         console.error('Error fetching patients:', err);


//     }
}

  return (
    <div className="patient-list">
    <h3>Patients</h3>
    <ul>
        {patients.map(patient => (
            <li key={patient.id}>
                <button onClick={() => setSelectedPatient(patient)}>
                    {patient.name}
                </button>
            </li>
        ))}
    </ul>
</div>
  )
}

export default MyPatients;
