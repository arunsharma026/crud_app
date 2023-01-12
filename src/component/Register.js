import axios from "axios";
import React, {  useEffect, useState } from "react";  
import { useNavigate } from "react-router-dom"; 

const Register = () =>{
  const navigate = useNavigate();

    const [users, setUsers] = useState({
      fname : " ",
lname : " ",
email:" ",
password:"",
city : "",
gender:""
    });

    const [status, setStatus] = useState(false);
    const [fail, setfail] = useState(false);
    
useEffect(()=>{

  console.log("Registered")

},[status])

function onTextfildChange(e){

    setUsers({
        ...users,
        [e.target.name] : e.target.value
    })

    console.log(users)
}

function onFormsubmit(e){
     
  e.preventDefault();

  if(!users.fname || !users.lname || !users.email || !users.password){
    //  alert("All field are Mandatory")

    setfail(true)
  }

  else{

    
  try{
  
    axios.post(`https://631b1541fae3df4dcff40bb2.mockapi.io/registrer`, users)

    // axios.post(`https://631b1541fae3df4dcff40bb2.mockapi.io/registrer`, users)
   // await axios.post(`https://bruxapp.cloud/testing/user_registration.php`, users)
 
   setTimeout(() => {
    navigate("../", { replace: true });
   }, 1000)
   
 
  
}
catch (error){
   console.logo("please check error");
}
setStatus(true)

}  
  }
  

return(
<>
<div className="container">

  <div>{(status)? <h2 className="success">Hello {users.fname} you have register succesfully</h2> : " "}</div>
  <div >{(fail)? <h2 className="fail">Please fill all field</h2> : " "}</div>
 <h2>Register</h2>
  <form >
    <div className="form-group">
      <label htmlFor="fname">Name:</label>
      <input type="text" className="form-control" value={users.fname} placeholder="User Name" onChange={e=>onTextfildChange(e)} name="fname" />
    </div>
    <div className="form-group">
      <label htmlFor="lname">LName:</label>
      <input type="text" className="form-control" value={users.lname} placeholder="User Name" onChange={e=>onTextfildChange(e)} name="lname" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" className="form-control" value={users.email} placeholder="Email" onChange={e=>onTextfildChange(e)} name="email" />
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" value={users.password} id="pwd" onChange={e=>onTextfildChange(e)} name="password" />
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Gender:</label> <br></br>
      <input type="radio" className="form-control"  value="male" onChange={e=>onTextfildChange(e)} name="gender" style={{width  : "18px", margin: "0px 10px", height  : "18px" , display : "inline-block", }} />male

      <input type="radio" className="form-control" value="female" onChange={e=>onTextfildChange(e)} name="gender" style={{width  : "18px" , margin: "0px 10px", height  : "18px", display : "inline-block", }} /> Female

    </div>
    <div className="checkbox">
      <label><input type="checkbox" name="remember" /> Remember me</label>
    </div>
    <button type="submit" className="button"  onClick={e => onFormsubmit(e)}>Add</button>
  </form>
  </div>
</>

)

}

export default Register;