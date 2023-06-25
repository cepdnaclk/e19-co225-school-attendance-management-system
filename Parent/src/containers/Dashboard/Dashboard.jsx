import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Box, Grid } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const attendanceData = [
  { month: 'Jan', attendance: 80 },
  { month: 'Feb', attendance: 90 },
  { month: 'Mar', attendance: 70 },
  { month: 'Apr', attendance: 85 },
  { month: 'May', attendance: 95 },
  { month: 'Jun', attendance: 75 },
];

export default function AttendanceCard() {
  const totalDays = 180; // Total academic days
  const absentDays = [8, 10, 17, 24]; // Array of days the student was absent this month
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
            sx={{
              maxWidth: '100%', // Set the maxWidth to 100%
              flexGrow: 1,
              transition: 'transform 0.5s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              },
              borderRadius: '10px',
              opacity: 0.8,
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Attendance Overview
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={attendanceData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="attendance" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

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
