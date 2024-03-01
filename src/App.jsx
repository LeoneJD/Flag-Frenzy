import { useState } from 'react'
import './App.css'

import * as React from 'react';
import Button from '@mui/material/Button';
import { motion } from "framer-motion"
import NavBar from './components/NavBar';
import Footer from './components/FooterContainer';
import ContinentSelector from './components/continentSelector';


function App() {
  return (
    <>
      <NavBar />
      <div>
        < ContinentSelector/>
      </div>
      <Footer />

    </>
  )
}

export default App