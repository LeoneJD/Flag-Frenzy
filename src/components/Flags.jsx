import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const Flags = ({ selectedContinent }) => {
    const [info, setInfo] = useState([]);
    const [randomCountry, setRandomCountry] = useState(null);
    const [randomCountry2, setRandomCountry2] = useState(null);
    const [randomCountry3, setRandomCountry3] = useState(null);
    const [randomCountry4, setRandomCountry4] = useState(null);
    const [randomName, setRandomName] = useState(null);
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/region/${selectedContinent}?fields=name,flags`);
                const data = await response.json();
                console.log(selectedContinent);
                const nameList = [];
                nameList.push(chooseRandomCountry(data));
                nameList.push(chooseRandomCountry2(data));
                nameList.push(chooseRandomCountry3(data));
                nameList.push(chooseRandomCountry4(data));
                pickRandomCountryName(nameList);
                setInfo(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [selectedContinent, counter]);

    const chooseRandomCountry = (data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomCountry(data[randomIndex]);
        return data[randomIndex].name.common;
    };

    const chooseRandomCountry2 = (data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomCountry2(data[randomIndex]);
        return data[randomIndex].name.common;
    };

    const chooseRandomCountry3 = (data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomCountry3(data[randomIndex]);
        return data[randomIndex].name.common;
    };

    const chooseRandomCountry4 = (data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomCountry4(data[randomIndex]);
        return data[randomIndex].name.common;
    };

    const pickRandomCountryName = (nameList) => {
        const randomIndex = Math.floor(Math.random() * nameList.length);
        setRandomName(nameList[randomIndex]);
    };

    const handleButtonClick = (clickedCountry) => {
        console.log('Button clicked for:', clickedCountry);
        setCounter(counter + 1); // Increment attempt counter every time a button is clicked
        if (randomName === clickedCountry) {
            alert('YES, you are right!');
            if (counter < 9) {
                setScore(score + 1); // Increment score only if the counter is less than 9
            }
        } else {
            alert('Sorry, wrong answer. Keep trying');
        }
    };

    return (
        <div>
            <h1>Guess the Flag</h1>
            {randomCountry && (
                <div>
                    <h2>Which flag does this country belong to?</h2>
                    <h2>{randomName}</h2>
                    <Button onClick={() => handleButtonClick(randomCountry.name.common)}>
                        <img src={randomCountry.flags.png} alt="" />
                    </Button>
                    <Button onClick={() => handleButtonClick(randomCountry2.name.common)}>
                        <img src={randomCountry2.flags.png} alt="" />
                    </Button>
                    <Button onClick={() => handleButtonClick(randomCountry3.name.common)}>
                        <img src={randomCountry3.flags.png} alt="" />
                    </Button>
                    <Button onClick={() => handleButtonClick(randomCountry4.name.common)}>
                        <img src={randomCountry4.flags.png} alt="" />
                    </Button>
                </div>
            )}
            <h2>Attempts: {counter} </h2>
            <h2>Score: {score}</h2>
        </div>
    );
};

export default Flags;
