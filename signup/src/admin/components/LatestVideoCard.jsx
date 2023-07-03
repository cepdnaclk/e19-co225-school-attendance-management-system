import { Box, Card, CardContent, Typography } from "@mui/material";
<<<<<<< HEAD

function LatestVideoCard(props) {
=======
import schoollogo from '../assets/school.jpg'
import {useEffect, useState} from "react";

function LatestVideoCard(props) {

    const [studentPresence, setStudentPresence] = useState(0);

    useEffect(() => {
        // Fetch student presence data and update the state
        const fetchStudentPresence = async () => {
            try {
                const response = await fetch('http://localhost:8080/attendance/getAllStudentPresence');
                if (response.ok) {
                    const data = await response.json();
                    setStudentPresence(data);
                } else {
                    console.error('Error:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchStudentPresence();
    }, []);

    const [studentAbsence, setStudentAbsence] = useState(0);

    useEffect(() => {
        // Fetch student presence data and update the state
        const fetchStudentAbsence = async () => {
            try {
                const response = await fetch('http://localhost:8080/attendance/getAllStudentAbsent');
                if (response.ok) {
                    const data = await response.json();
                    setStudentAbsence(data);
                } else {
                    console.error('Error:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchStudentAbsence();
    }, []);

>>>>>>> b4244ceba429206da30718c5b186972bbafcca9b
    return (<Card {...props}>
        <CardContent>
            <Typography variant="cardTitle">Total School Attendance</Typography>
            <Box sx={styles.latestVideoContainer} >
<<<<<<< HEAD
                <Box sx={styles.latestVideoThumbnail} component={'img'} src={'src/assets/thumbnail.png'} />
                <Typography sx={styles.latestVideoTitle}>ReactJs SearchBar in 5 Minutes!</Typography>
            </Box>
            <Typography variant="h7" sx={styles.latestVideoTimeLabel}>First 6 hours:</Typography>
            <Box sx={styles.latestVideoStatsRow}>
                <Typography variant="h7">Views</Typography>
                <Typography variant="h7">225</Typography>
            </Box>
            <Box sx={styles.latestVideoStatsRow}>
                <Typography variant="h7">Watch Time</Typography>
                <Typography variant="h7">30</Typography>
            </Box>
            <Box sx={styles.latestVideoStatsRow}>
                <Typography variant="h7">Likes</Typography>
                <Typography variant="h7">23</Typography>
            </Box>

            
            <Typography sx={styles.cardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
            <Typography sx={styles.cardAction} variant="link">SEE COMMENTS(12)</Typography>
=======
                <Box sx={styles.latestVideoThumbnail} component={'img'} src={schoollogo} />
                <br/>
            </Box>
            <Box>
                <Typography variant="h6">Student Attendance count = {studentPresence}</Typography>
            </Box>
            <Box>
                <Typography variant="h6">Absent Count = {studentAbsence}</Typography>
            </Box>
            <Box>
                <Typography variant="h6">Total Student = {studentPresence+ studentAbsence} </Typography>
            </Box>
            <Box>
                <Typography variant="h6">Today Attendance percentage = {((studentPresence / (studentPresence + studentAbsence)) * 100).toFixed(2)}% </Typography>
            </Box>
>>>>>>> b4244ceba429206da30718c5b186972bbafcca9b

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
<<<<<<< HEAD
        filter: "brightness(20%)",
=======
        filter: "brightness(80%)",
>>>>>>> b4244ceba429206da30718c5b186972bbafcca9b
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

