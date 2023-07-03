import { Box, Card, CardContent, Typography } from "@mui/material";
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

    return (<Card {...props}>
        <CardContent>
            <Typography variant="cardTitle">Total School Attendance</Typography>
            <Box sx={styles.latestVideoContainer} >
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

