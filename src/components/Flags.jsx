import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

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
            } else {
                setFeedback('Sorry, wrong answer!');
            }
            setTimeout(() => {
                // Clear the feedback after 1 second
                setFeedback(null);
            }, 1000);
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
        setSavedName(userName);
        handleCloseModal();
    };
    
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
                    {feedback && (
                        <div style={{ color: feedback === 'Correct!' ? 'green' : 'red', padding: '0.5rem', fontWeight: 'bold' }}>
                            {feedback}
                        </div>
                    )}
                    {savedName && (
                        <h2>Thank you for playing, {savedName}!</h2>
                    )}
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
