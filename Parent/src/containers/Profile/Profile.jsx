import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: '100vh',
  },
  detailsBox: {
    background: '#ffffff',
    padding: theme.spacing(3),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    },
  },
  studentBox: {
    marginTop: theme.spacing(3),
    background: '#ffffff',
    padding: theme.spacing(3),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    },
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    job: '',
    student: '',
    fatherID: '',
    imagelink: '',
    studentWeight: '',
    studentClassroom: '',
    studentName: '',
    studentAddress: '',
    studentHeight: '',
    studentID: '',
    studentMobile: ''
  });

  const storedEmail = localStorage.getItem('fatherEmail') || 'father1@example.com';
  const [relationship, setRelationship] = useState('');

  const fetchFatherDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/father/getbyemail/${storedEmail}`);
      if (response.ok) {
        const father = await response.json();
        setFormData(father); // Update the state directly with the fetched data
        setRelationship('Father');
      }
    } catch (error) {
      console.error('Error fetching father details:', error);
    }
  };

  const fetchMotherDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/mother/getbyemail/${storedEmail}`);
      if (response.ok) {
        const mother = await response.json();
        setFormData(mother); // Update the state directly with the fetched data
        setRelationship('Mother');
      }
    } catch (error) {
      console.error('Error fetching mother details:', error);
    }
  };

  const fetchGuardianDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/guardian/getbyemail/${storedEmail}`);
      if (response.ok) {
        const guardian = await response.json();
        setFormData(guardian); // Update the state directly with the fetched data
        setRelationship('Guardian');
      }
    } catch (error) {
      console.error('Error fetching guardian details:', error);
    }
  };

  useEffect(() => {
    fetchFatherDetails();
  }, []);

  useEffect(() => {
    fetchMotherDetails();
  }, []);

  useEffect(() => {
    fetchGuardianDetails();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData); // Example: Log the form data to the console
    handleClose(); // Close the dialog after submitting
  };

  return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.detailsBox}>
              <Typography variant="h4" gutterBottom>
                Personal Information
              </Typography>
              <Typography variant="body1">Full Name: {formData.name}</Typography>
              <Typography variant="body1">Phone Number: {formData.mobile}</Typography>
              <Typography variant="body1">Email Address: {formData.email}</Typography>
              <Typography variant="body1">Address: {formData.address}</Typography>
              <Typography variant="body1">Job: {formData.job}</Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.studentBox}>
              <Typography variant="h4" gutterBottom>
                Student Information
              </Typography>
              <Typography variant="body1">(ren) Name(s): {formData.studentName}</Typography>
              <Typography variant="body1">Grade/Class: {formData.studentClassroom}</Typography>
              <Typography variant="body1">Student ID(s): {formData.studentID}</Typography>
              <Typography variant="body1">Address: {formData.studentAddress}</Typography>
              <Typography variant="body1">Weight: {formData.studentWeight}</Typography>
              <Typography variant="body1">Height: {formData.studentHeight}</Typography>
              <Typography variant="body1">Student Mobile: {formData.studentMobile}</Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.studentBox}>
              <Typography variant="h4" gutterBottom>
                Relationship to the Student
              </Typography>
              <Typography variant="body1">Relationship: {relationship}</Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Edit Details
            </Button>
          </Grid>
        </Grid>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Details</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      label="Address"
                      variant="outlined"
                      fullWidth
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
        </Dialog>
      </div>
  );
};

export default ProfilePage;