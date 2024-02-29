import { motion } from "framer-motion"

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ContinentSelector() {
    return (
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={continents}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Continent" />}
            />
        );
    }
        
const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
