import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'; import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'; import StyleIcon from '@mui/icons-material/Style';
import { Link, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined'; import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'; import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined'; import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';

<<<<<<< HEAD
=======
import masoud from '../assets/avatars/masoud.jpeg'
>>>>>>> b4244ceba429206da30718c5b186972bbafcca9b
function SideNav() {
    const { collapsed } = useProSidebar();
    const theme = useTheme();

    return <Sidebar
        style={{ height: "100%", top: 'auto' }}
        breakPoint="md"
        backgroundColor={theme.palette.neutral.light}

    >
        <Box sx={styles.avatarContainer}>
<<<<<<< HEAD
            <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />
=======
            <Avatar sx={styles.avatar} alt="Masoud" src={masoud} />
>>>>>>> b4244ceba429206da30718c5b186972bbafcca9b
            {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Adminstrator</Typography> : null}
            {!collapsed ? <Typography variant="overline">Wimalasiri P.M.A.C</Typography> : null}
        </Box>

        <Menu
            menuItemStyles={{
                button: ({ level, active }) => {
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined,
                    };
                },
            }}>
            <MenuItem active={window.location.pathname === "/"} component={<Link to="/" />} icon={<HomeOutlinedIcon />}> <Typography variant="body2">Dashboard</Typography> </MenuItem>
            <MenuItem active={window.location.pathname === "/addstudent"} component={<Link to="/addstudent" />} icon={<GroupAddOutlinedIcon />}> <Typography variant="body2">Add Student </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/removestudent"} component={<Link to="/removestudent" />} icon={<DeleteOutlineOutlinedIcon />}> <Typography variant="body2">Remove Student </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/registration"} component={<Link to="/registration" />} icon={<HowToRegOutlinedIcon />}> <Typography variant="body2">Show registration </Typography></MenuItem >
            <MenuItem active={window.location.pathname === "/createclasses"} component={<Link to="/createclasses" />} icon={<NoteAddOutlinedIcon />}> <Typography variant="body2">Create Classes </Typography></MenuItem >

        </Menu >
    </Sidebar >; 
}

export default SideNav;

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }

}