import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Africa from '../assets/images/africa.png'
import AmericaNorth from '../assets/images/americaNorth.png'
import AmericaSouth from '../assets/images/americaSouth.png'
import Asia from '../assets/images/asia.png'
import Europe from '../assets/images/europe.png'
import Oceania from '../assets/images/oceania.png'


export default function ContinentSelector() {
    const [selectedContinent, setSelectedContinent] = useState(null);

    const handleContinentChange = (event, value) => {
        setSelectedContinent(value);
        console.log(value); // Log the selected value
    };

    return (
        <div className="continentAutocomplete">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={continents}
                sx={{ width: 350 }}
                onChange={handleContinentChange}
                renderInput={(params) => <TextField {...params} label="Choose a continent" InputLabelProps={{ style: { color: 'white' } }}/>}
            />
            {selectedContinent && (
                <div>
                    {/* Add your image here */}
                    {/* <img src={Europe} alt="Europe continent image" /> */}
                    {getImageForContinent(selectedContinent)}
                </div>
            )}
        </div>
    );
}

const continents = ['Africa', 'North America', 'South America', 'Asia', 'Europe', 'Oceania'];

const getImageForContinent = (continent) => {
    switch (continent) {
        case 'Africa':
            return <img src={Africa} alt="Africa" />;
        case 'North America':
            return <img src={AmericaNorth} alt="North America" />;
        case 'South America':
            return <img src={AmericaSouth} alt="South America" />;
        case 'Asia':
            return <img src={Asia} alt="Asia" />;
        case 'Europe':
            return <img src={Europe} alt="Europe" />;
        case 'Oceania':
            return <img src={Oceania} alt="Oceania" />;
        default:
            return null;
    }
};
