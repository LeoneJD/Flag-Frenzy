import React from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

const ContactUsForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            label="Name"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            label="Email"
                            type="email"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            multiline
                            rows={4}
                            label="Message"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default ContactUsForm;
