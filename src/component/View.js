import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

const View = ()=>{

    const {id} = useParams();

const [datausers, setdataUsers] = useState ([]);

useEffect (()=>{

    async function getUserdata (){

        try{

            const datausers = await axios.get(`https://631b1541fae3df4dcff40bb2.mockapi.io/registrer/${id}`);

            setdataUsers(datausers.data);
        } catch(error){

            console.log("plese check error");
        }
       
    }
    getUserdata();
}, [])


    return(

        <>
<div className="container">
        <h2>{datausers.fname}</h2>
     <table className="table table-hover">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">L Name</th>
      <th scope="col">Email</th>
      <th scope="col">password</th>
      <th scope="col">Gender</th> 
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{datausers.id}</td> 
        <td>{datausers.fname}</td> 
        <td>{datausers.lname}</td> 
        <td>{datausers.email}</td> 
        <td>{datausers.password}</td> 
        <td>{datausers.gender}</td>
    </tr>
  </tbody>

     </table>
     </div>
        </>
    )
}

export default View;