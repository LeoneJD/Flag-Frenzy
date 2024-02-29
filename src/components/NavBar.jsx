import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
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
          Score: 100
        </Typography>
        
        {/* Button for high scores */}
        <Button color="inherit">High Scores</Button>
        
        {/* Button to start again */}
        <Button color="inherit">Start Again</Button>
        
        {/* Contact us button */}
        <Button color="inherit">Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;