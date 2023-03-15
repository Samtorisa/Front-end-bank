import React,{Fragment,useState} from 'react'

import UJBox from "./Components/UJBox";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import "./App.css";

import ACTP from "./Components/ACTP";

function App() {
  
  return (
    
    <Router>
      <Routes>
      
      
      <Route path="/" element={<UJBox/>}/>
     
     
     
     
     <Route path="ACTP" element={<ACTP/>}/>
            



    
    </Routes>
  </Router>
  
     
     
     
     
     
     
    
    
  );
}

export default App;
