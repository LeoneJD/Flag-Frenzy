import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// Import sound files
import correctSound from '../assets/fx/correct-answer.wav';
import incorrectSound from '../assets/fx/incorrect-answer.wav';


const Flags = (props) => {
    console.log(props);
    const [info, setInfo] = useState([]);
    const [randomCountries, setRandomCountries] = useState([]);
    const [randomName, setRandomName] = useState(null);
    const [disableButtons, setDisableButtons] = useState(false);
    const [userName, setUserName] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [savedName, setSavedName] = useState('');
    const [RandomJoke, setRandomJoke] = useState('');

    // Create audio elements for correct and incorrect sounds
    const correctAudio = new Audio(correctSound);
    const incorrectAudio = new Audio(incorrectSound);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetches flags from user specified continent
                const response = await fetch(`https://restcountries.com/v3.1/region/${props.selectedContinent}?fields=name,flags`);
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

    }, [props.selectedContinent, props.counter]);

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
            // Check if the clicked button matches the country name
            if (randomName === clickedCountry) {
                setFeedback('Correct!');
                props.setScore(props.score + 1);
                // Play correct sound
                correctAudio.play();
            } else {
                setFeedback('Sorry, wrong answer!');
                // Play incorrect sound
                incorrectAudio.play();
            }
            setTimeout(() => {
                // Clear the feedback after 2 second
                setFeedback(null);
            }, 2000);
            props.setCounter(props.counter + 1);
            if (props.counter >= 9) {
                setDisableButtons(true);
                setOpenModal(true);
            }
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleNameInputChange = (event) => {
        setUserName(event.target.value);
    };

    const handleSaveName = () => {
        const scores = JSON.parse(localStorage.getItem('highScores')) || [];
        const newScore = { name: userName, score: props.score };
        scores.push(newScore);
        scores.sort((oldHighScore, newHighScore) => newHighScore.score - oldHighScore.score);
        localStorage.setItem('highScores', JSON.stringify(scores.slice(0, 10)));
        setSavedName(userName);
        setTimeout(() => {
            history.push('/HighScores');
        }, 2000); // Save score after 2 seconds
        handleCloseModal();
    };
    
    async function fetchRandomJoke() {
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
          return result[0].Joke; 
        } catch (error) {
          console.error(error);
          return 'Failed to fetch joke'; 
        }
      }
      useEffect(() => {
        const getJoke = async () => {
          const joke = await fetchRandomJoke();
          setRandomJoke(joke); // Use the setRandomJoke state setter to store the fetched joke
        };
      
        getJoke();
      }, []);

    return (
        <div>
            {props.selectedContinent && (
                <>
                    <h1>{randomName}</h1>
                    {randomCountries.length > 0 && (
                        <div>
                            <h3>Which flag does this country belong to?</h3>
                            <Grid container spacing={2}>
                                {randomCountries.map((country, index) => (
                                    <Grid item xs={6} sm={3} key={index}>
                                        <Card className='flag'>
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
                    {feedback && (
                        <div style={{ color: feedback === 'Correct!' ? 'white' : 'white', padding: '0.5rem', fontWeight: 'bold' }}>
                            {feedback}
                        </div>
                    )}
                    {savedName && (
                        <h2>Thank you for playing, {savedName}!</h2>
                    )}
                     <div>
                    <h3>Joke of the day:</h3>
                    <p>{RandomJoke}</p>
                    </div>
                    {/* Modal for entering user name */}
                    <Dialog open={openModal} onClose={handleCloseModal}>
                        <DialogTitle>The Quiz Has Ended!</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Enter Your Name"
                                type="text"
                                fullWidth
                                value={userName}
                                onChange={handleNameInputChange}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleSaveName}>Save</Button>
                        </DialogActions>
                    </Dialog>
                </>
            )}
        </div>
    );
};

export default Flags;
