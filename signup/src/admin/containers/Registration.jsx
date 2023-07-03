import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Grid, Paper } from '@mui/material';

const ClassRegistrationPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [className, setClassName] = useState();

    const handleSearch = () => {

        fetch(`http://localhost:8080/tempclass/${className}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchResults(data);
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
            });
    };

    return (
        <Container maxWidth="sm">
            <br/>
            <Typography variant="h4" align="center" gutterBottom>
                Registered Classes
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <TextField
                        label="Class"
                        fullWidth id="class-input"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" onClick={handleSearch} fullWidth>
                        Search
                    </Button>
                </Grid>
            </Grid>

            <Paper elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
                {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                        <div key={result.id}>
                            <h3>{result.className}</h3>
                            {/* Display other details as needed */}
                        </div>
                    ))
                ) : (
                    <Typography variant="body1">No results found</Typography>
                )}
            </Paper>
        </Container>
    );
};

export default ClassRegistrationPage;
