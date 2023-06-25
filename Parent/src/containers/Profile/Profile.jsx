import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: '100vh',
    overflow: 'auto',
  },
  profileBox: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
}));

const ProfilePage = () => {
  const classes = useStyles();

  const [parentDetails, setParentDetails] = useState({
    fullName: "John Doe",
    phoneNumber: "1234567890",
    email: "johndoe@example.com",
    address: "123 Main St, City, State, Country",
    childNames: ["Jane Doe", "John Jr."],
    grade: "5",
    studentIds: ["ID001", "ID002"],
    relationship: "Parent",
  });

  const [editing, setEditing] = useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={4} md={3}>
          <Avatar className={classes.avatar} alt="Patent Holder" src="/path/to/avatar.jpg" />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <div className={classes.profileBox}>
            <Typography variant="h5" className={classes.title}>
              {editing ? (
                <TextField
                  label="Full Name"
                  value={parentDetails.fullName}
                  onChange={(e) =>
                    setParentDetails((prevDetails) => ({
                      ...prevDetails,
                      fullName: e.target.value,
                    }))
                  }
                />
              ) : (
                parentDetails.fullName
              )}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Phone: {editing ? (
                <TextField
                  value={parentDetails.phoneNumber}
                  onChange={(e) =>
                    setParentDetails((prevDetails) => ({
                      ...prevDetails,
                      phoneNumber: e.target.value,
                    }))
                  }
                />
              ) : (
                parentDetails.phoneNumber
              )}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Email: {editing ? (
                <TextField
                  value={parentDetails.email}
                  onChange={(e) =>
                    setParentDetails((prevDetails) => ({
                      ...prevDetails,
                      email: e.target.value,
                    }))
                  }
                />
              ) : (
                parentDetails.email
              )}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Address: {editing ? (
                <TextField
                  value={parentDetails.address}
                  onChange={(e) =>
                    setParentDetails((prevDetails) => ({
                      ...prevDetails,
                      address: e.target.value,
                    }))
                  }
                />
              ) : (
                parentDetails.address
              )}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Child(ren): {editing ? (
                <TextField
                  value={parentDetails.childNames.join(', ')}
                  onChange={(e) =>
                    setParentDetails((prevDetails) => ({
                      ...prevDetails,
                      childNames: e.target.value.split(',').map((name) => name.trim()),
                    }))
                  }
                />
              ) : (
                parentDetails.childNames.join(', ')
              )}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Grade: {editing ? (
                <TextField
                  value={parentDetails.grade}
                  onChange={(e) =>
                    setParentDetails((prevDetails) => ({
                      ...prevDetails,
                      grade: e.target.value,
                    }))
                  }
                />
              ) : (
                parentDetails.grade
              )}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Student IDs: {editing ? (
                <TextField
                  value={parentDetails.studentIds.join(', ')}
                  onChange={(e) =>
                    setParentDetails((prevDetails) => ({
                      ...prevDetails,
                      studentIds: e.target.value.split(',').map((id) => id.trim()),
                    }))
                  }
                />
              ) : (
                parentDetails.studentIds.join(', ')
              )}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Relationship: {editing ? (
                <TextField
                  value={parentDetails.relationship}
                  onChange={(e) =>
                    setParentDetails((prevDetails) => ({
                      ...prevDetails,
                      relationship: e.target.value,
                    }))
                  }
                />
              ) : (
                parentDetails.relationship
              )}
            </Typography>
            {editing ? (
              <Button onClick={() => setEditing(false)}>Save</Button>
            ) : (
              <Button onClick={() => setEditing(true)}>Edit</Button>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
