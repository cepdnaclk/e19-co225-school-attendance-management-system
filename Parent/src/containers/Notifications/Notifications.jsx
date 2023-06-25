import React, { useState } from 'react';
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
    { date: '2023-06-24', message: 'Your child did not attend school today.', reason: '', editing: true },
    { date: '2023-06-23', message: 'Your child did not attend school today.', reason: '', editing: true },
    { date: '2023-06-22', message: 'Your child did not attend school today.', reason: '', editing: true },
  ]);

  const handleReasonChange = (index, reason) => {
    const updatedNotifications = [...notifications];
    updatedNotifications[index].reason = reason;
    setNotifications(updatedNotifications);
  };

  const handleReasonSubmit = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications[index].editing = false;
    setNotifications(updatedNotifications);
  };

  return (
    <Container maxWidth="sm" sx={{ marginLeft: '2rem', marginRight: '2rem', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Notifications from Parents
      </Typography>
      <List sx={{ width: '100%' }}>
        {notifications.map((notification, index) => (
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
                primary={notification.message}
                secondary={`Date: ${notification.date}${notification.reason ? ` - Reason: ${notification.reason}` : ''}`}
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
    </Container>
  );
};

export default NotificationPage;
