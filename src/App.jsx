import { useState } from 'react'
import './App.css'

import * as React from 'react';
import Button from '@mui/material/Button';
import { motion } from "framer-motion"
import NavBar from './components/NavBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar />

      </div>

    </>
  )
}

export default App
