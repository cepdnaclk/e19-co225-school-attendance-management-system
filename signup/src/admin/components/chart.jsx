import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
    Chart,
    PieSeries,
    Title,
    Legend
} from '@devexpress/dx-react-chart-material-ui';

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const App = () => {
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        // Fetch attendance data from the API endpoint
        fetch("http://localhost:8080/attendance/getMonthAbsence/2022") // Replace with the appropriate URL and year
            .then((response) => response.json())
            .then((data) => {
                const parsedData = data.map((item) => {
                    const [month, absenceCount] = item.split(",");
                    const monthName = monthNames[parseInt(month) - 1]; // Subtract 1 to match array index
                    return { argument: monthName, value: parseInt(absenceCount) };
                });
                setAttendanceData(parsedData);
            })
            .catch((error) => {
                console.error("Error fetching attendance data:", error);
            });
    }, []);

    return (
        <Box>
            <Chart data={attendanceData}>
                <PieSeries valueField="value" argumentField="argument" />
                <Legend />
                <Title text="Attendance by Month" />
            </Chart>
        </Box>
    );
};

export default App;
