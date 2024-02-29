import { motion } from "framer-motion"

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function ContinentSelector({}) {
    return (
        <container className="ContinentSelector">
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            // options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Continent" />}
            />
        </container>
    );
}

const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

export default ContinentSelector