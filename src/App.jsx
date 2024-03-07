
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

async function random-joke() {
  const url = 'https://joke-box.p.rapidapi.com/api/v1/jokes/DadJokes';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4e3e1380e7msh1244316b160181bp1c5e19jsn8f3e50c9ecab',
      'X-RapidAPI-Host': 'joke-box.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    console.log(result[0]);
    console.log(result[0].Joke);
  } catch (error) {
    console.error(error);
  }
}
  
random-joke() 



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

