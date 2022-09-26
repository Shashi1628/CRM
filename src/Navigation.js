// import Navigation from './Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login24 from "./Login24"
import Signup from "./Signup"
import Test from "./Test"
import React from 'react'

export default function Navigation() {
  return <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login24/>}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  
}
