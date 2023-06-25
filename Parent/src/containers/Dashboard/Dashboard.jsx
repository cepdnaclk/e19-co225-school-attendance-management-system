import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function AttendanceCard() {
  const totalDays = 180; // Total academic days
  const absentDays = [3, 10, 17, 24]; // Array of days the student was absent this month
  const today = new Date().getDate(); // Get the current day

  const getPresentDays = () => {
    const presentDays = [];
    for (let i = 1; i <= totalDays; i++) {
      if (!absentDays.includes(i)) {
        presentDays.push(i);
      }
    }
    return presentDays;
  };

  const handleTileClass = ({ date }) => {
    const day = date.getDate();
    if (absentDays.includes(day)) {
      return 'absent-day';
    }
    return null;
  };

  const isPresentToday = () => {
    return !absentDays.includes(today);
  };

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          flexGrow: 1,
          transition: 'transform 0.5s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          },
          borderRadius: '10px', // Increase the border radius
          opacity: 0.8, // Make the card more transparent
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Current Date and Time
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date: {currentDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Time: {currentTime}
          </Typography>
        </CardContent>
      </Card>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          gap: '20px',
          marginTop: '20px',
          width: '100%',
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            flexGrow: 1,
            transition: 'transform 0.5s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            },
            borderRadius: '10px', // Increase the border radius
            opacity: 0.8, // Make the card more transparent
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Attendance Summary
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Days: {totalDays}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Absent Days: {absentDays.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Present Days: {getPresentDays().length}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                height: '200px',
              }}
            >
              <CircularProgress
                variant="determinate"
                value={Math.round((getPresentDays().length / totalDays) * 100)}
                color="primary"
                size={160}
                thickness={4}
                sx={{
                  position: 'absolute',
                  zIndex: 1,
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  Present Days
                </Typography>
                <Typography variant="h4" color="text.primary">
                  {getPresentDays().length}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 345,
            flexGrow: 1,
            transition: 'transform 0.5s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            },
            borderRadius: '10px', // Increase the border radius
            opacity: 0.8, // Make the card more transparent
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Attendance Today
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {isPresentToday() ? 'Present' : 'Absent'}
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 345,
            flexGrow: 1,
            transition: 'transform 0.5s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            },
            borderRadius: '10px', // Increase the border radius
            opacity: 0.8, // Make the card more transparent
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Attendance Calendar
            </Typography>
            <Calendar
              tileClassName={handleTileClass}
              calendarType="US"
              showNeighboringMonth={false}
              value={new Date()} // Set the current month as the default value
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
