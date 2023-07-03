import React from "react";
import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";
import ColorText from "../components/ColorText";
import LatestVideoCard from "../components/LatestVideoCard";
import Chart from '../components/chart';
import BarChart from '../components/BarChart';
import masoud from '../assets/avatars/masoud.jpeg';

function Dashboard() {
    return (
        <Box sx={styles.container}>
            <Typography sx={styles.pageTitle} variant="h5">
                School Management System
            </Typography>
            <Box sx={styles.columnsContainer}>
                <Card sx={styles.item}>
                    <CardContent>
                        <Box sx={styles.postAuthorSection}>
                            <Avatar sx={styles.avatar} alt="Masoud" src={masoud} />
                            <Typography sx={styles.postMeta}>Have a nice Day</Typography>
                            <Typography sx={styles.postMeta}>
                                {new Date().toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </Typography>
                        </Box>

                        <Typography variant="cardTitle">Vision</Typography>
                        <br />
                        <Typography variant="body2">
                            Be a leading educational institution that empowers students to
                            become lifelong learners, critical thinkers, and compassionate
                            global citizens. Through innovative teaching practices,
                            personalized learning experiences, and strong community
                            partnerships, we strive to nurture the intellectual, social, and
                            emotional growth of every student.
                        </Typography>
                        <Divider sx={styles.divider} />

                        <Typography variant="cardTitle">Mission</Typography>
                        <br />
                        <Typography variant="body2">
                            Create a dynamic and inclusive learning environment where every
                            student feels valued, supported, and inspired to reach their full
                            potential. We are committed to fostering a culture of excellence,
                            equity, and collaboration, providing high-quality education that
                            prepares students for success in an ever-changing world.
                        </Typography>
                    </CardContent>
                </Card>
                <LatestVideoCard sx={styles.item} />
                <Card sx={styles.item}>
                    <CardContent>
                        <Typography variant="cardTitle">Attendance Chart</Typography>
                        <Chart />
                    </CardContent>
                </Card>
                <Card sx={styles.item}>
                    <CardContent>
                        <BarChart></BarChart>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}

export default Dashboard;

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    pageTitle: {
        mb: 2,
    },
    columnsContainer: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "16px",
        maxWidth: 1400,
    },
    item: {
        mb: 2,
    },
    divider: {
        my: 2,
    },
    postAuthorSection: {
        display: "flex",
        alignItems: "center",
        my: 3,
    },
    postMeta: {
        mr: 1,
        fontSize: "0.8rem",
        color: "neutral.normal",
    },
    avatar: {
        width: "30px",
        height: "auto",
        marginRight: 1,
    },
};
