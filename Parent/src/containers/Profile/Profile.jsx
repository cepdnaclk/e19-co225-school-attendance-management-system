import React, {useEffect, useState} from 'react';
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
    fullName: 'John Doe',
    phoneNumber: '123-456-7890',
    emailAddress: 'john.doe@example.com',
    address: '123 Main Street, City, State, Zip',
  });


  const fetchFatherByEmail = async (email) => {
    try {
      const response = await fetch(`http://localhost:8080/father/getbyemail/${email}`);
      if (response.ok) {
        const father = await response.json();
        setFormData({
          fullName: father.fullName,
          phoneNumber: father.phoneNumber,
          emailAddress: father.emailAddress,
          address: father.address,
        });
      }
    } catch (error) {
      console.error('Error fetching father details:', error);
    }
  };

  useEffect(() => {
    const email = 'father1@example.com'; // Replace with the desired email
    fetchFatherByEmail(email);
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setFormData({
      fullName: 'John Doe',
      phoneNumber: '123-456-7890',
      emailAddress: 'john.doe@example.com',
      address: '123 Main Street, City, State, Zip',
    });
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      address: '',
    });
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
            <Typography variant="body1">Full Name: {formData.fullName}</Typography>
            <Typography variant="body1">Phone Number: {formData.phoneNumber}</Typography>
            <Typography variant="body1">Email Address: {formData.emailAddress}</Typography>
            <Typography variant="body1">Address: {formData.address}</Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.studentBox}>
            <Typography variant="h4" gutterBottom>
              Student Information
            </Typography>
            <Typography variant="body1">Child(ren) Name(s): Jane Doe, John Doe Jr.</Typography>
            <Typography variant="body1">Grade/Class: 5th Grade, 2nd Grade</Typography>
            <Typography variant="body1">Student ID(s): 12345, 67890</Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.studentBox}>
            <Typography variant="h4" gutterBottom>
              Relationship to the Student
            </Typography>
            <Typography variant="body1">Relationship: Father</Typography>
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
