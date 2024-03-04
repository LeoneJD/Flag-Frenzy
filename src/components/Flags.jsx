import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Flags = ({ selectedContinent }) => {
    const [info, setInfo] = useState([]);
    const [randomCountries, setRandomCountries] = useState([]);
    const [randomName, setRandomName] = useState(null);
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
    const [disableButtons, setDisableButtons] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetches flags from user specified continent
                const response = await fetch(`https://restcountries.com/v3.1/region/${selectedContinent}?fields=name,flags`);
                const data = await response.json();
                const randomCountries = chooseRandomCountries(data, 4);
                const randomName = randomCountries[Math.floor(Math.random() * randomCountries.length)].name.common;
                setRandomCountries(randomCountries);
                setRandomName(randomName);
                setInfo(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [selectedContinent, counter]);

    const chooseRandomCountries = (data, count) => {
        const randomCountries = [];
        while (randomCountries.length < count) {
            const randomIndex = Math.floor(Math.random() * data.length);
            randomCountries.push(data[randomIndex]);
        }
        // Returns an array of randomly selected countries
        return randomCountries;
    };

    const handleButtonClick = (clickedCountry) => {
        if (!disableButtons) {
            // console.log('Button clicked for:', clickedCountry);
            // Check if the clicked button matches the country name
            if (randomName === clickedCountry) {
                alert('YES, you are right!');
                setScore(score + 1);
            } else {
                alert('Sorry, wrong answer. Keep trying');
            }
            setCounter(counter + 1);
            if (counter >= 9) {
                setDisableButtons(true);
                const name = prompt('Game over. Enter your name:');
                if (name) {
                    setUserName(name);
                }
            }
        }
    };

    return (
        <div>
            <h1>Guess the Flag</h1>
            {randomCountries.length > 0 && (
                <div>
                    <h2>Which flag does this country belong to?</h2>
                    <h2>{randomName}</h2>
                    <Grid container spacing={2}>
                        {randomCountries.map((country, index) => (
                            <Grid item xs={6} sm={3} key={index}>
                                <Card>
                                    <CardActionArea onClick={() => handleButtonClick(country.name.common)} disabled={disableButtons}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={country.flags.png}
                                            alt={country.name.common}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
            <h2>Attempts: {counter}</h2>
            <h2>Score: {score}</h2>
            {counter >= 9 && (
                <h2>Thank you for playing, {userName}!</h2>
            )}
            {/* <h2>Here you have a random fact</h2> */}
        </div>
    );
};

export default Flags;
