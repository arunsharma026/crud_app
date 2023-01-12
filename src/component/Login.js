import axios from "axios";
import React, {useEffect, useState } from "react";
import {Link, useNavigate}  from "react-router-dom";

const Login = ()=>{

const navigation = useNavigate();
const [userLog, setuserLog] = useState({

  email : " ",
  password : ""
});
 
const [fError, setError]=useState({});
const [issubmit, setisSubmit] = useState(false);

const onTextfildChange = (e) =>{

  const {name, value} = e.target

  
setuserLog({
  ...userLog,
  [name] : value
});
}
const onFormlogin =(e)=>{

  e.preventDefault();
  setError(validate(userLog));
  setisSubmit(true);

axios.post('https://reqres.in/api/login',{

email:userLog.email,
password:userLog.password
})
.then(result=>{
  localStorage.setItem('token',result.data.token)
  navigation('/dashboard')
  
})
.catch(error=>{

  alert('Server error')
  console.log(error);
})
}


useEffect (()=>{
  console.log(fError);
if(Object.keys(fError).length === 0 && issubmit){
console.log(userLog);
} 
}, [fError]);

const validate = (values)=>{
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  // const regex = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$';
  if (!values.email){
      errors.email = "user email is required";
  }
   else if (!regex.test(values.email)){
      errors.email = "This is not a Valid Email";
  }
  if (!values.password){
      errors.password = "user password is required";
  } else if (values.password.length < 4){
      errors.password = "password not more than 4 characters";
  }
  else if (values.password.length > 10){
      errors.password = "password not less than 10 characters";
  }
  return errors;
}

    return(

        <> 
<div className="container">

  <pre>
    {(Error)? <h2 className="success">Login fail</h2> : " "}
  </pre>
 <h2>Register</h2>
  <form >
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" value={userLog.email} placeholder="User Name" onChange={e=>onTextfildChange(e)} name="email" />
    </div>
   
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" value={userLog.password} id="pwd" onChange={e=>onTextfildChange(e)} name="password" />
    </div>
    
    <div class="checkbox">
      <label><input type="checkbox" name="remember" /> Remember me</label>
    </div>
    <button type="submit" className="button" onClick={e => onFormlogin(e)}>Add</button>
  </form>
  </div>

        </>

    )
}
export default Login;