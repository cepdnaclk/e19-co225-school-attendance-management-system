import React, { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
=======
>>>>>>> b4244ceba429206da30718c5b186972bbafcca9b
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';

import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material';
import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
import theme from './config/theme';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './containers/Dashboard';

import AppRoutes from './router/AppRoutes';



function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />                 {/*to add css basic rules */}

          <AppHeader />
          <Box sx={styles.container}>
          
            
            <SideNav />
            <Dashboard/>

            

          </Box>
        </ProSidebarProvider>
      </ThemeProvider>

    </React.Fragment>
  )
}

/**
 * @type {import('@mui/material').SxProps}
 */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  }
}
export default App
