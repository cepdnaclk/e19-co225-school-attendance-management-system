import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
//import { Link } from '@mui/material';
import { Link} from 'react-router-dom';

export default function Appbar() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'rgba(103, 104, 107, 0.7)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={'center'}>
            School Attendance Management System
          </Typography>
          
          <Link to="/notificationpage" >
            <IconButton
              size="large"
              color="inherit"
              aria-label="notifications"
              sx={{ mr: 2 }}
            >
              <NotificationsIcon />
            </IconButton>
          </Link>
          <IconButton
            size="large"
            color="inherit"
            aria-label="messages"
          >
            <MessageIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
  }
