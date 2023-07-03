import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";
import ColorText from "../components/ColorText";
import LatestVideoCard from "../components/LatestVideoCard";
import Chart from '../components/chart';
import masoud from '../assets/avatars/masoud.jpeg';

function Dashboard() {
    return <Box>
        <br/>
        <Typography sx={styles.pageTitle} variant="h5">School Management System</Typography>
        <Box sx={styles.columnsContainer}>

            <LatestVideoCard sx={styles.item} />
            <Card sx={styles.item}>
                <CardContent>
                <Box sx={styles.postAuthorSection}>
                        <Avatar sx={styles.avatar} alt="Masoud" src={masoud} />
                        <Typography sx={styles.postMeta}>Have a nice Day</Typography>
                        <Typography sx={styles.postMeta}>Jan 19, 2023</Typography>
                    </Box>

                    <Typography variant="cardTitle">Vision</Typography>
                    <br/>
                    <Typography variant="body2"> Be a leading educational institution that empowers students to become lifelong learners, critical thinkers, and compassionate global citizens. Through innovative teaching practices, personalized learning experiences, and strong community partnerships, we strive to nurture the intellectual, social, and emotional growth of every student.</Typography>
                    <Divider sx={styles.divider} />
                    
                    <Typography variant="cardTitle">Mission</Typography>
                    <br/>
                    <Typography variant="body2"> Create a dynamic and inclusive learning environment where every student feels valued, supported, and inspired to reach their full potential. We are committed to fostering a culture of excellence, equity, and collaboration, providing high-quality education that prepares students for success in an ever-changing world.</Typography>

                    
                </CardContent>
            </Card>

            <Card sx={styles.item}>
                <CardContent>
                    <Typography variant="cardTitle">Attendance Chart</Typography>
                    <Chart />
                    
                </CardContent>
            </Card>
            
            

        </Box>
    </Box>;
}

export default Dashboard;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        mb: 2
    },
    columnsContainer: {
        columns: '280px 3',
        maxWidth: 1400
    },
    item: {
        mb: 2,
    },
    divider: {
        my: 2
    },
    videoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        '&:hover': {
            color: 'primary.main',
            cursor: 'pointer'
        }
    },
    cardAction: {
        mt: 2
    },
    ideaContent: {
        display: 'flex',
    },
    ideaImage: {
        width: 80,
        alignSelf: 'center',
        ml: 5
    },
    ideaQuestion: {
        fontSize: '0.9rem',
        fontWeight: 500,
        my: 2
    },
    avatar: {
        width: '30px',
        height: 'auto',
        marginRight: 1
    },
    postStats: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridAutoRows: '25px'
    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',
        my: 3
    },
    postMeta: {
        mr: 1,
        fontSize: '0.8rem',
        color: 'neutral.normal'
    },
    videoThumbnail: {
        width: 80,
        ml: 'auto'
    },
    commentRow: {
        display: 'flex',
        alignItems: 'flex-start',
        mt: 2
    },
    commentDetailsSection: {
        display: 'flex',
        alignItems: 'center',
    },
    commentText: {
        fontSize: '0.8rem',
        mt: 0.5,
        mr: 2
    },
    insiderImage: {
        width: '100%',
        mt: 1
    }
}

