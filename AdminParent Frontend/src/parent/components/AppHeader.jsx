import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Settings } from "@mui/icons-material";
import { useProSidebar } from "react-pro-sidebar";
import book from '../assets/sample-logo.png';

function AppHeader(){
    const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
    return(
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={()=> broken ? toggleSidebar(): collapseSidebar()} color="secondary">
                    < MenuIcon/>
                </IconButton>
                <Box 
                    component='img'
                    sx={styles.appLogo}
                    src={book}/>

                <Box sx={{flexGrow:1}}/>
                <IconButton title='Notifications'  color="secondary">
                <Badge badgeContent={14} color="primary">
                    < NotificationsIcon/>
                </Badge>
                </IconButton>
                <IconButton title='Settings'  color="secondary">
                    <SettingsIcon/>
                </IconButton>
                <IconButton title='Sign Out'  color="secondary">
                    <LogoutIcon/>
                </IconButton>
                
            </Toolbar>
        </AppBar>
    );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar:{
        bgcolor:'neutral.main'
    },

    appLogo:{
        borderRadius:2,
        width:80,
        ml:2,
        cursor:'pointor'
    }
}
export default AppHeader