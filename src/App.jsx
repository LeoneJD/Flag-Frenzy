//#

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries1";
import SingleCountry from "./components/SingleCountry";
//#


import { useState } from 'react'
import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import { motion } from "framer-motion"
import NavBar from './components/NavBar';
import Footer from './components/FooterContainer';
import ContinentSelector from './components/ContinentSelector';


function App() {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
    
    //#

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/:name" element={<SingleCountry />}></Route>
      </Routes>

      //#
      
    </BrowserRouter>

    {/* <>
      <NavBar counter={counter} score={score}/>
      <div>
        < ContinentSelector setScore={setScore} setCounter={setCounter} score={score} counter={counter}/>
      </div>
      <Footer />

    </> */}
    </div>

   
    
  )
}

export default App