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
import Flags from './Flags'; // Import the Flags component


export default function ContinentSelector(props) {
    const [selectedContinent, setSelectedContinent] = useState(null);

    const handleContinentChange = (event, value) => {
        setSelectedContinent(value);
        console.log(value); // Log the selected value
    };

    return (
        <div className="continentAutocomplete">
            {!selectedContinent && (
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={continents}
                    sx={{ width: 350 }}
                    onChange={handleContinentChange}
                    renderInput={(params) => 
                        <TextField 
                            {...params} 
                            label="Choose a continent" 
                            InputLabelProps={{ style: { color: 'white' } }}/>}
                />
            )}
            {selectedContinent && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                >
                    {/* Display image for selected continent */}
                    <img
                        src={getImageForContinent(selectedContinent)}
                        alt={selectedContinent}
                    />
                </motion.div>
            )}
            {selectedContinent && <Flags selectedContinent={selectedContinent} setScore={props.setScore} setCounter={props.setCounter} counter={props.counter} score={props.score}  />} {/* Pass selected value as props to Flags */}
        </div>
    );
}

const continents = ['Africa', 'North America', 'South America', 'Asia', 'Europe', 'Oceania'];

const getImageForContinent = (continent) => {
    switch (continent) {
        case 'Africa':
            return Africa;
        case 'North America':
            return AmericaNorth;
        case 'South America':
            return AmericaSouth;
        case 'Asia':
            return Asia;
        case 'Europe':
            return Europe;
        case 'Oceania':
            return Oceania;
        default:
            return null;
    }
};