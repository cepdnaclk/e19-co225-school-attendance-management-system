
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import React  from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './config/theme';
import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';


function App() {

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppHeader/>
        <Box sx={styles.container}>
            <SideNav/>
            <Box component={'main'} sx={styles.mainSection}>

            </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container:{
      display:'flex',
      bgcolor:'neutral.light',
      height:'calc(100%-64)'
  },

  mainSection:{
    p:1,
    width: '100%',
    overflow:'auto'
  }
}

export default App
