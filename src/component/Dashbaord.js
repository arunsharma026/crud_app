import React, { useEffect } from "react";
import {Link , useNavigate } from 'react-router-dom'; 
 
const Dashboard = ()=>{

const navigation = useNavigate()

useEffect (()=>{
    if(!localStorage.getItem('token')){
        navigation('/login')
    }
},[])

const Logout = ()=>{
    localStorage.removeItem('token');
    navigation('/login')
}
return(

    <>
    <h2>Welcome to Dashboard</h2>
    <button onClick={Logout}>Logout</button>
 
 
    </>

)

}

export default Dashboard;
