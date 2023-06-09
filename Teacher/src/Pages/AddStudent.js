import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ImageField from './ImageField';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';
import '../App.css';

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherMobile, setFatherMobile] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [fatherEmail, setFatherEmail] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherMobile, setMotherMobile] = useState('');
  const [motherOccupation, setMotherOccupation] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [guardianMobile, setGuardianMobile] = useState('');
  const [guardianOccupation, setGuardianOccupation] = useState('');
  const [guardianEmail, setGuardianEmail] = useState('');
  const [landline, setLandline] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the submitted data
    const student = {
      name,
      address,
      fatherName,
      fatherMobile,
      fatherOccupation,
      fatherEmail,
      motherName,
      motherMobile,
      motherOccupation,
      guardianName,
      guardianMobile,
      guardianOccupation,
      guardianEmail,
      landline,
      weight,
      height,
      image
    };
    console.log(student);

    // Reset the form fields
    setName('');
    setAddress('');
    setFatherName('');
    setFatherMobile('');
    setFatherOccupation('');
    setFatherEmail('');
    setMotherName('');
    setMotherMobile('');
    setMotherOccupation('');
    setGuardianName('');
    setGuardianMobile('');
    setGuardianOccupation('');
    setGuardianEmail('');
    setLandline('');
    setWeight('');
    setHeight('');
    setImage(null);

    // Send the data to the server
    // Your API endpoint and request configuration here
    // fetch('http://localhost:8080/student/add', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(student),
    // })
    //   .then(() => {
    //     console.log('New student is added');
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  useEffect(() => {
    // Fetch students from the server
    // Your API endpoint and request configuration here
    // fetch('http://localhost:8080/student/getAll')
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setStudents(result);
    //   });
  }, []);

  return (
    <body>
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >

          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              '& > :not(style)': { m: 1, width: '100%', textAlign: 'center' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Student Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              id="outlined-basic"
              label="Student Address"
              variant="outlined"
              value={address}
              onChange={handleAddressChange}
            />
            <TextField
              id="outlined-basic"
              label="Father's Name"
              variant="outlined"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Father's Mobile"
              variant="outlined"
              value={fatherMobile}
              onChange={(e) => setFatherMobile(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Father's Occupation"
              variant="outlined"
              value={fatherOccupation}
              onChange={(e) => setFatherOccupation(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Father's Email"
              variant="outlined"
              value={fatherEmail}
              onChange={(e) => setFatherEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Mother's Name"
              variant="outlined"
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Mother's Mobile"
              variant="outlined"
              value={motherMobile}
              onChange={(e) => setMotherMobile(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Mother's Occupation"
              variant="outlined"
              value={motherOccupation}
              onChange={(e) => setMotherOccupation(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Guardian's Name"
              variant="outlined"
              value={guardianName}
              onChange={(e) => setGuardianName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Guardian's Mobile"
              variant="outlined"
              value={guardianMobile}
              onChange={(e) => setGuardianMobile(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Guardian's Occupation"
              variant="outlined"
              value={guardianOccupation}
              onChange={(e) => setGuardianOccupation(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Guardian's Email"
              variant="outlined"
              value={guardianEmail}
              onChange={(e) => setGuardianEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Landline"
              variant="outlined"
              value={landline}
              onChange={(e) => setLandline(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Weight"
              variant="outlined"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Height"
              variant="outlined"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <ImageField label="Images" onChange={handleImageChange} />

            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Add Student
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
    </body>
  );
}
