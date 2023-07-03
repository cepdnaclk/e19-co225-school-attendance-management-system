import React, {useEffect, useState} from 'react';
import { Typography, TextField, Button, Container, Grid, Paper } from '@mui/material';

const RemoveStudentPage = () => {
  const handleSearch = () => {
    // Perform search logic here
    const parsedID = parseInt(studentID);
    if (!isNaN(parsedID) && parsedID !== 0) {
      fetch(`http://localhost:8080/student/getbyID/${parsedID}`)
          .then((res) => res.json())
          .then((data) => {
            setStudent(data);
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching student:', error);
          });
    } else {
      setStudent({});
    }
  };

  const handleConfirm = () => {
    // Perform removal confirmation logic here
    fetch(`http://localhost:8080/student/delete/${studentID}`, {
      method: 'DELETE',
    })
        .then((res) => {
          if (res.status === 200) {
            console.log('Student deleted successfully');
            // Optionally, perform additional logic after successful deletion
          } else {
            console.error('Failed to delete student');
            // Optionally, handle the failure case
          }
          // Reset the student state to an empty object
          setStudent({});
        })
        .catch((error) => {
          console.error('Error deleting student:', error);
          // Optionally, handle the error case
        });
  };

  const [studentID, setStudentID] = useState();
  const [student, setStudent] = useState({});

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Remove Student
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <TextField
                label="Student ID"
                fullWidth
                value={studentID}
                onChange={(e) => setStudentID(parseInt(e.target.value))}
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={handleSearch} fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
          <Button variant="contained" onClick={handleConfirm}>
            Confirm Removal
          </Button>
        </Grid>
        <div>
          <h3>{student.name}</h3>
          <p>Land Phone: {student.landPhone}</p>
          <p>Address: {student.address}</p>
          <p>Weight: {student.weight}</p>
          <p>Height: {student.height}</p>
        </div>
      </Paper>
    </Container>
  );
};

export default RemoveStudentPage;
