import React, { useEffect, useState } from "react";  
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Edit = () =>{


    const {id} = useParams();
    const navigate = useNavigate();
const [status, setStatus] = useState(false);
const [editstudent, setEditstudent] = useState({
    email: "",
    password:""
});

function onTextfildChange(e){
    setEditstudent({
        ...editstudent,
        [e.target.name] : e.target.value
    })
}

useEffect(()=>{

async function onFormUpdate(){
    
    try{
        const editstudent = await axios.get(`https://631b1541fae3df4dcff40bb2.mockapi.io/registrer/${id}`)
        setEditstudent(editstudent.data);

       
    }catch(error){
        console.log("somthing is wrong");
    }
    
}
onFormUpdate();

}, [id])

function onUpdateForm(e){
    e.preventDefault()
    try{
         axios.put(`https://631b1541fae3df4dcff40bb2.mockapi.io/registrer/${id}`, editstudent)
         navigate('/');
         setStatus(true);
    } catch(error){
        console.log("Something is wrong in edit");
    }
}


//     const {id} = useParams();
//     const navigate = useNavigate();

// const [editUser, setEditeuser] = useState({

//     email:"",
//     password:""
// });

// function  onTextfildChange(e){

//     setEditeuser({

//         ...editUser, [e.target.value] : e.target.value
//     })
// }

// useEffect(()=>{

//     async function onFormUpdate(){
        
//         try{
//             const editstudent = await axios.get(`http://localhost:3000/users/${id}`)
//             setEditeuser(editstudent.data);
//         }catch(error){
//             console.log("somthing is wrong");
//         }
//     }
//     onFormUpdate();
    
//     }, [id])
    
    
// async function onUpdateForm(e){
//     e.preventDefault()
//     try{
//         await axios.put(`http://localhost:3000/users/${id}`, editUser)
//          navigate('/');
//     } catch(error){
//         console.log("Something is wrong in edit");
//     }
// }

return(

    <>
    <div className="container">

    <div>{(status)? <h2 className="success">Hello {editstudent.fname} you have register succesfully</h2> : " "}</div>
    <h2>{editstudent.fname}</h2>
    
    <form >
    
     
    {/* <div className="form-group">
    <input type="text" autoComplete="id" name="id" id="id" autoFocus value={editstudent.id} placeholder="Name" className="form_controll" disabled />
</div> */}

    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" className="form-control" id="email" value={editstudent.email} placeholder="Email" onChange={e=>onTextfildChange(e)} name="email" />
    </div>

    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" id="password" value={editstudent.password} onChange={e=>onTextfildChange(e)} name="password" />
    </div>
     <button type="submit" className="button"  onClick={e => onUpdateForm(e)}>Add</button>
  </form>
  </div>
    </>
)

}

export default Edit;