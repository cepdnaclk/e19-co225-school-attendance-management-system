import { Avatar, Box, Typography } from "@mui/material";
import { Menu,MenuItem,Sidebar, useProSidebar } from "react-pro-sidebar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTheme } from "@emotion/react";
import {Link, useLocation} from "react-router-dom";



function SideNav(){
    const{collapsed} = useProSidebar(); 
    const theme  = useTheme();
    const location = useLocation();
    return(<Sidebar
        style={{
            height:'100%',
            top:'auto'
        }}
            breakPoint="md"
            backgroundColor = {theme.palette.neutral.light}
        >
        <Box sx={styles.avatarContainer}>
            <Avatar sx={styles.avatar} alt='Channel Name' src="src/assets/avatars/avatar.jpg"/>
            {!collapsed ?    <Typography varient="body2" sx={styles.yourChannel}>Student Name</Typography> : null}
            {!collapsed ?    <Typography varient="body2" sx={styles.yourChannel}>Grade</Typography> : null}

            
        </Box>
        <Menu menuItemStyles={{
                button: ({ level, active }) => {
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined,
                    };
                },
            }}>

            <MenuItem  active={location.pathname ==='/'} component={<Link to ="/"/>} icon={<NotificationsIcon/>}>
                <Typography variant="body2">Dashboard</Typography>
            </MenuItem>
            <MenuItem  active={location.pathname ==='/profile'}  component={<Link to ="/profile"/>}icon={<NotificationsIcon/>}>
                <Typography variant="body2">Profile</Typography>
            </MenuItem>
            <MenuItem  active={location.pathname ==='/notifications'}  component={<Link to ="/notifications"/>}icon={<NotificationsIcon/>}>
                <Typography variant="body2">Notifications</Typography>
            </MenuItem>
        </Menu>
    </Sidebar>);
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    avatarContainer:{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        my:5

    },

    avatar:{
        width:'40%',
        height:'auto'
    },

    yourChannel:{
        mt:1
    }

}


export default SideNav