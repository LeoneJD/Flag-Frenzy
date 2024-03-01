import * as React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ContinentSelector() {
    const selectedContinent = (event, value) => {
        console.log(value); // Logs the selected value
    };

    return (
        <div className="continentAutocomplete">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={continents}
                sx={{ width: 350 }}
                onChange={selectedContinent}
                renderInput={(params) => <TextField {...params} label="Choose a continent" InputLabelProps={{ style: { color: 'white' } }}/>}
            />
        </div>
    );
}

const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
