import React, {useEffect, useState} from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
  ]);

  const handleReasonChange = (index, note) => {
    const updatedNotifications = [...notifications];
    updatedNotifications[index].note = note;
    setNotifications(updatedNotifications);
  };

    const handleReasonSubmit = (index) => {
        const updatedNotifications = [...notifications];
        const updatedNotification = { ...updatedNotifications[index] };
        updatedNotification.editing = false;
        updatedNotifications[index] = updatedNotification;
        setNotifications(updatedNotifications);

        const updatedAbsentNote = [...absentNote];
        const updatedAbsentNoteItem = { ...updatedAbsentNote[index] };
        updatedAbsentNoteItem.note = updatedNotification.note;
        updatedAbsentNote[index] = updatedAbsentNoteItem;
        setAbsentNote(updatedAbsentNote);

        const requestBody = {
            attendenceid: updatedAbsentNoteItem.attendenceID,
            note: updatedAbsentNoteItem.note,
        };

        fetch(`http://localhost:8080/attendance/update/${updatedAbsentNoteItem.attendenceID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log('Absent note updated successfully:', result);
            })
            .catch((error) => {
                console.error('Error updating absent note:', error);
            });
    };




  const studentID = localStorage.getItem('studentID') || 7;
  const [absent, setAbsent] = useState([]);
  const [absentNote, setAbsentNote] = useState([]);

  useEffect(() => {
    if (studentID) {
      fetch(`http://localhost:8080/attendance/absent/${studentID}`)
          .then((res) => res.json())
          .then((result) => {
            //console.log(result);
            const formattedNotifications = result.map((notification) => ({
              studentID: notification.studentID,
                attendenceID: notification.attendenceID,
              date: notification.date,
              month: notification.month,
              year: notification.year,
              editing: notification.editing = true,
              note: notification.note,
            }));
            console.log(formattedNotifications);
            setAbsent(result);
          })
          .catch((error) => {
            console.error('Error fetching absent students:', error);
          });
    }
  }, [studentID]);

  useEffect(() => {
    if (studentID) {
      fetch(`http://localhost:8080/attendance/absentNote/${studentID}`)
          .then((res) => res.json())
          .then((result) => {
            //console.log(result);
            const formattedNotifications = result.map((notification) => ({
              studentID: notification.studentID,
                attendenceID: notification.attendenceID,
              date: notification.date,
              month: notification.month,
              year: notification.year,
              editing: notification.editing = false,
              note: notification.note,
            }));
            console.log(formattedNotifications);
            setAbsentNote(result);
          })
          .catch((error) => {
            console.error('Error fetching absent students:', error);
          });
    }
  }, [studentID]);

  return (
    <Container maxWidth="sm" sx={{ marginLeft: '2rem', marginRight: '2rem', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Absent Notifications | Submit Reason
      </Typography>
      <List sx={{ width: '100%' }}>
        {absent.map((notification, index) => (
          <Box
            key={index}
            component={Paper}
            sx={{
              marginBottom: '1rem',
              marginLeft: '2rem',
              marginRight: '2rem',
              padding: '1rem',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
              transition: 'box-shadow 0.3s',
              '&:hover': {
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
              },
              width: '90vw', // Adjust the width based on viewport width
              maxWidth: '500px', // Set a maximum width for larger screens
            }}
          >
            <ListItem>
              <ListItemText
                primary="Your child did not attend school today."
                secondary={`Date: ${notification.date} Month: ${notification.month} Year: ${notification.year}`}
              />
              {notification.editing ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleReasonSubmit(index);
                  }}
                >
                  <TextField
                    label="Reason for not attending"
                    variant="outlined"
                    fullWidth
                    value={notification.reason}
                    onChange={(e) => handleReasonChange(index, e.target.value)}
                    sx={{ marginBottom: '1rem' }}
                  />
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </form>
              ) : null}
            </ListItem>
          </Box>
        ))}
      </List>

      <Typography variant="h4" component="h1" align="center" gutterBottom>
          Absent Notifications (Reason submitted)
      </Typography>
      <List sx={{ width: '100%' }}>
        {absentNote.map((notification, index) => (
            <Box
                key={index}
                component={Paper}
                sx={{
                  marginBottom: '1rem',
                  marginLeft: '2rem',
                  marginRight: '2rem',
                  padding: '1rem',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
                  },
                  width: '90vw', // Adjust the width based on viewport width
                  maxWidth: '500px', // Set a maximum width for larger screens
                }}
            >
              <ListItem>
                <ListItemText
                    primary="Your child did not attend school today."
                    secondary={`Date: ${notification.date} Month: ${notification.month} Year: ${notification.year}${notification.note ? ` - Reason: ${notification.note}` : ''}`}
                />
                {notification.editing ? (
                    <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleReasonSubmit(index);
                        }}
                    >
                      <TextField
                          label="Reason for not attending"
                          variant="outlined"
                          fullWidth
                          value={notification.note}
                          onChange={(e) => handleReasonChange(index, e.target.value)}
                          sx={{ marginBottom: '1rem' }}
                      />
                      <Button variant="contained" type="submit">
                        Submit
                      </Button>
                    </form>
                ) : null}
              </ListItem>
            </Box>
        ))}
      </List>
    </Container>
  );
};

export default NotificationPage;
