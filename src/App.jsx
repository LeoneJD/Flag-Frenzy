
import Countries from "./pages/Countries";
import SingleCountry from "./pages/SingleCountry";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import './App.css'
import * as React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/FooterContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HighScores from './pages/HighScores';
import ContactUs from './pages/ContactUs';
import LandingPage from './pages/LandingPage';


function App() {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);

  
  return (

      <Router >
        <NavBar counter={counter} score={score}/>
          <Routes>
            
            <Route path='' element={<LandingPage setScore={setScore} setCounter={setCounter} counter={counter} score={score} />} />
            <Route path='/HighScores' element={<HighScores />} />
            <Route path='/ContactUs' element={<ContactUs />} />

            <Route path="/Countries" element={<Countries />}></Route>
            {<Route path="/:name" element={<SingleCountry />}></Route>}
          </Routes>
        <Footer/>
      </Router >
  )
}

export default App
