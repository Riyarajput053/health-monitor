import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Functions/Navbar';
const ViewDocNotes = () => {

  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () =>{
    //fetch api 
  }
  const handleViewNotes = (noteId)=>{
    //show details of records 


  };
  return (
    <div>
       <Navbar authUser={true}/>
    <div className="container">
      <h1>View Doctor notes</h1>
      <div className="notes-container">
        {notes.map(note => (
          <div key={note.id} className="notes-card">
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <button onClick={() => handleViewNotes(note.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default ViewDocNotes
