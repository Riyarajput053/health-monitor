import React, { useEffect, useState } from 'react'
import {Navigate, Outlet} from "react-router-dom"
import axios from 'axios'

function PrivateRoute() {

    const [authUser , setAuthUser] = useState({})

    const getAuthenticatedUser = async () =>{
        const res = await axios.get("http://localhost:5000/User/authuser" , {withCredentials : true})
        .then((value) =>{
            console.log(value.data.Authuser)
            setAuthUser(value.data.Authuser)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getAuthenticatedUser()
    } , [])
    console.log(authUser)
  return (
    <div>
       {
        authUser ? <Outlet/> : <Navigate to= "/home"/>
       }
    </div>
  )
}

export default PrivateRoute
