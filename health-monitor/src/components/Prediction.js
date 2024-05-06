import React, { useEffect } from 'react'
import Navbar from "./Functions/Navbar";


const Prediction = ( authUser) => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
    const PredUrl = 'https://prediction-lzf7fvjzzfumqfigkptnve.streamlit.app/?someparam=value&embedded=true';
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <Navbar authUser={true}></Navbar>
        <iframe
        title="Prediction"
        src={PredUrl}
        width="100%"
        height="127%"
        
        style={{ border: 'none' }}
        ></iframe>
      
    </div>
  )
}

export default Prediction;
