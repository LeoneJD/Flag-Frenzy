import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Styles.css'; // Import the CSS file

const Footer = () => {
  // Array of GitHub links and their corresponding text
  const githubLinks = [
    { link: 'https://github.com/wpena', text: 'Pena W' },
    { link: 'https://github.com/Andrea-Melisa', text: 'Andrea Melisa' },
    { link: 'https://github.com/NikkyNiko', text: 'Nikoleta N' },
    { link: 'https://github.com/LeoneJD', text: 'Leone Dale' },
    { link: 'https://github.com/aftabahmad888', text: 'Aftab Ahmad' },
  ];

  return (
    <Box component="footer" className="footer">
      <Typography>
        Made with ❤️ by Group 15
      </Typography>
      
      {/* GitHub footer links */}
      <Box className="footer-links"> 
        {githubLinks.map(({ link, text }) => (
          <Link key={text} href={link}>
            <IconButton color="inherit" className="github-icon">
              <GitHubIcon />
            </IconButton>
            <Typography>
              {text}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Footer;
