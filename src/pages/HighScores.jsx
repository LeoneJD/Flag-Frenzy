import React, { useEffect, useState } from 'react';
import '../assets/css/Style.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { deepOrange, deepPurple } from '@mui/material/colors';

const HighScores = () => {
    const [highScores, setHighScores] = useState([]);

    useEffect(() => {
        // Fetch high scores from local storage
        const storedHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
        setHighScores(storedHighScores);
    }, []);

    // Function to generate random avatar color
    const getRandomColor = () => {
        const colors = [deepOrange[500], deepPurple[500]];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className='highscore-card'>
            <h1 className='highscore-title'>High Scores</h1>
            <List>
                {highScores.map((score, index) => (
                    <ListItem className='highscore-list' key={index}>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: getRandomColor(), marginRight: '10px' }}>
                                {score.name.charAt(0)}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <span style={{ color: 'black' }}>{score.name} - Score: {score.score}</span>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default HighScores;