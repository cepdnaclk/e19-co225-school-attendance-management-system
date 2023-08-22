import React, { useEffect, useState } from 'react';
import { Container, Paper, Button } from '@mui/material';
import './src/App.css';
export default function Student() {
  const paperStyle = { padding: '50px 20px',
                       width: 600,
                       margin: '20px auto',
                       backgroundColor:"" };
  const buttonStyle = {
                        fontSize: '14px',
                        padding: '1px 1px',
                        height: '36px', // Adjust the height to a suitable size
                        width: '120px', // Adjust the width to a suitable size
                        backgroundColor: '#1877F2', // Set the background color to blue
                        color: '#ffffff', // Set the font color to white
                        border: 'none', // Remove the border
                        borderRadius: '4px',
                        cursor: 'pointer',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                      };
                      
                      
                       // Custom styles for the button
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/reason/getUnchecked')
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  const handleCHECKED = (id) => {
    // Update the UI by filtering out the deleted student
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));

    // Update the detailChecked value in the database
    fetch(`http://localhost:8080/reason/updateDetailChecked/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ detailChecked: true }),
    })
      .then(() => {
        console.log(`detailChecked value updated for student with ID ${id}`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <body className='Navappbody'>
    <Container>
      <Paper elevation={3} style={paperStyle}>
        {students.filter((student)=>student.reason !== null)
        .map((student) => {
          if (student.detail_checked) {
            return null; // Skip rendering the details if detailChecked is true
          }
          return (
            <Paper
  elevation={6}
  style={{
    margin: '10px',
    padding: '15px',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#f1f1f1', // Set the background color
    borderRadius: '8px', // Add border radius for a rounded look
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
  }}
  key={student.id}
>
              <div>
                <p>Id: {student.id}</p>
                <p>Name: {student.name}</p>
                <p>Reason: {student.reason}</p>
              </div>
              <Button 
                variant="contained"
                color="success" // Set the color prop to "primary" for blue color
                onClick={() => handleCHECKED(student.id)}
                style={buttonStyle}
              >
                CHECKED
              </Button>

            </Paper>
          );
        })}
      </Paper>
    </Container>
    </body>
  );
}