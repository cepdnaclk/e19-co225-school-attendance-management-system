import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Settings } from "@mui/icons-material";

function AppHeader(){
    return(
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={()=>console.log('clicked')} color="secondary">
                    < MenuIcon/>
                </IconButton>
                <Box 
                    component='img'
                    sx={styles.appLogo}
                    src="/src/assets/book.png"/>
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