import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Grid, Paper } from '@mui/material';

const ClassCreationPage = () => {
  const [className, setClassName] = useState('');
  const [teacherEmail, setTeacherEmail] = useState('');

  const handleCreateClass = () => {
    const classData = {
      className: className,
      teacherEmail: teacherEmail
    };

    fetch('http://localhost:8080/class/addNew', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(classData)
    })
        .then((response) => {
          if (response.ok) {
            console.log('Class created successfully');
            setClassName('');
            setTeacherEmail('');
          } else {
            console.error('Failed to create class');
          }
        })
        .catch((error) => {
          console.error('Error creating class:', error);
        });
  };

  return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 10 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Class Creation
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
                  label="Class Name"
                  fullWidth
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  label="Class Teacher Email"
                  fullWidth
                  value={teacherEmail}
                  onChange={(e) => setTeacherEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleCreateClass} fullWidth>
                Create Class
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
  );
};

export default ClassCreationPage;
