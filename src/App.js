import React from "react";
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import List from './component/List';
import Login from './component/Login';
import Register from './component/Register'; 
import Dashboard from "./component/Dashbaord";
import Edit from "./component/Edit";
import View from "./component/View";
function App() {
  return (
     <>
     <Routes>
      <Route exect path="/" element={< List />} />
      <Route exact path='register' element={<Register />} />
      <Route exact path='edit/:id' element={<Edit />} />  
      <Route exact path='view/:id' element={<View /> } />  
      <Route exact path='login' element={<Login />} />  
      <Route exact path='dashboard' element={<Dashboard />} />  
   
      </Routes>
     </>
  );
}

export default App;
