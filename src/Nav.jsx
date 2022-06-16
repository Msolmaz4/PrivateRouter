import React from 'react'
import Account from "./Account";
import "./nav.css";
import Home from "./Home";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Nav = () => {
  return (
  
 <BrowserRouter>
    <div className="pp">
     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
     
    </div>
    </BrowserRouter>
    
  );

   
  
}

export default Nav