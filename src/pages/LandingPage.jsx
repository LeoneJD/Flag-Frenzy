import React, { useState } from 'react';
import ContinentSelector from '../components/ContinentSelector';

const LandingPage = ({ counter, score, setScore, setCounter }) => {

    return (
    <>

        <h2>Welcome! Let's see your knowledge of country flags! </h2>
        <div>
            < ContinentSelector setScore={setScore} setCounter={setCounter} score={score} counter={counter}/>
        </div>

    </>
    )
}

export default LandingPage;
