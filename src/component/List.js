import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link}  from "react-router-dom";
const List = () =>{ 
  const [users, setUsers] = useState([]);

useEffect(()=>{
getAlldata();

})

async function getAlldata(){

  try{
    const users = await axios.get("https://631b1541fae3df4dcff40bb2.mockapi.io/registrer")

    setUsers(users.data);
  }catch(error){
    console.log("Somthing is wrong");
  }
}

const hendleDelete =  id =>{

   axios.delete(`https://631b1541fae3df4dcff40bb2.mockapi.io/registrer/${id}`);

  let newUsers = users.filter((item)=>{

    return item.id !== id;
  })
  setUsers(newUsers);
}

return(
<>
<div className="container">
  <h2>Tab with Dropdown Menu</h2>
  <ul className="nav nav-tabs" role="tablist">
    <li className="active"><Link to="Register">Add New User</Link></li>
    <li className="active"><Link to="login">Login</Link></li> 
  </ul>

<div className="table_bx">
  <table className="table table-hover">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">L Name</th>
      <th scope="col">Email</th>
      <th scope="col">password</th>
      <th scope="col">Gender</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
    {
      
      
      users.map((Elmt, i)=>{

        return(

          
    <tr key={i}>
    <td>
     {Elmt.id}
    </td>

      <td>
     {Elmt.fname}
    </td>
    <td>
     {Elmt.lname}
    </td>
    <td>
     {Elmt.email}
    </td>
    <td>
     {Elmt.password}
    </td>
    <td>
     {Elmt.gender}
    </td>
    <td>
<Link to={`View/${Elmt.id}`} className="edit"> <i className="fa fa-eye"></i></Link> 
<Link to={`Edit/${Elmt.id}`} className="edit"> <i className="fa fa-pencil"></i></Link> 
<button onClick={()=> hendleDelete(Elmt.id)}  className="delete"><i className="fa fa-trash"></i></button>
    </td>
        </tr>
    
        )

      })
    }

  </tbody>
</table>
</div>
</div>


 </>

)
}

export default List;
