import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  const handleStartAgain = () => {
    // Reset the counter and score to their initial values
    props.setCounter(0);
    props.setScore(0);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Logo text on the left side */}
        <Typography variant="h6">
          FLAG FRENZY
        </Typography>
        
        <Box sx={{ flexGrow: 1 }} />
        
        {/* Score counter */}
        <Typography variant="h6" sx={{ marginRight: 2 }}>
          Attempts: {props.counter} /10
        </Typography>
        {/* Score counter */}
        <Typography variant="h6" sx={{ marginRight: 2 }}>
          Score: {props.score}
        </Typography>


        {/* Button for high scores */}
        <Button color="inherit" component={Link} to="/HighScores">High Scores</Button>
    

        {/* Button to start again */}
        <Button color="inherit" component={Link} to="/" onClick={handleStartAgain}>Start Again</Button>
        
        
        {/* Contact us button */}
        <Button color="inherit" component={Link} to="/ContactUs">Contact Us</Button>
  
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;