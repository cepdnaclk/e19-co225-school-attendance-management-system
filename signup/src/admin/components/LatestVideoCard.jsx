import { Box, Card, CardContent, Typography } from "@mui/material";
import schoollogo from '../assets/school.jpg'

function LatestVideoCard(props) {
    return (<Card {...props}>
        <CardContent>
            <Typography variant="cardTitle">Total School Attendance</Typography>
            <Box sx={styles.latestVideoContainer} >
                <Box sx={styles.latestVideoThumbnail} component={'img'} src={schoollogo} />
                <br/>
            </Box>
            <Box>
                <Typography variant="h6">Student Attendance count = </Typography>
            </Box>
            <Box>
                <Typography variant="h6">Absent Count = </Typography>
            </Box>
            <Box>
                <Typography variant="h6">Total Student = </Typography>
            </Box>
            <Box>
                <Typography variant="h6">Today Attendance percentage = </Typography>
            </Box>

        </CardContent>
    </Card>);
}

export default LatestVideoCard;


/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    latestVideoContainer: {
        width: '100%',
        position: 'relative'
    },
    latestVideoThumbnail: {
        width: '100%',
        mt: 1,
        filter: "brightness(80%)",
        display: 'block'
    },
    latestVideoTitle: {
        position: 'absolute',
        bottom: 0,
        color: 'neutral.light',
        left: 0,
        right: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1rem',
        mb: 2
    },
    latestVideoTimeLabel: {
        color: 'neutral.normal',
        mt: 2
    },
    latestVideoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
    },
    cardAction: {
        mt: 2
    }
}

