import React, { useEffect, useState } from 'react'
import Navbar from './Functions/Navbar'
import axios from 'axios'
import "../style/AddPrescription.css"
import { Link  } from 'react-router-dom'
// import Card from './Card'

function ViewPrescriptions(authUser) {

  const [Images , setImages] = useState([])

  const GetAllImages = async () => {
    const res = await axios.get("http://localhost:5000/api/cards/getauthusercard" ,  {withCredentials:true})
    .then((value) => {
      console.log(value.data.reports)
      setImages(value.data.reports)
      console.log(Images)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    GetAllImages()
  } , [])


  return (
    <>
     <Navbar authUser={true}/>
    <div className='innerHomeSection container'>
      {
        Images.map((elem, index)=>{
          return <img src={elem.image} style={{width:'300px'}}></img>
        })
      }
    </div>
    </>
  )
}

export default ViewPrescriptions
