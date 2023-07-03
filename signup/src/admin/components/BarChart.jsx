import React from "react";
import { Box } from "@mui/material";
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    Title,
    Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { ValueScale } from "@devexpress/dx-react-chart";

const data = [
    { student: "Student 1", marks: 85, attendance: 80 },
    { student: "Student 2", marks: 90, attendance: 70 },
    { student: "Student 3", marks: 75, attendance: 90 },
    { student: "Student 4", marks: 80, attendance: 60 },
];

const BarChart = () => {
    return (
        <Box>
            <Chart data={data}>
                <ValueScale name="marks" />
                <ValueScale name="attendance" />

                <ArgumentAxis />
                <ValueAxis scaleName="marks" showGrid={true} />
                <ValueAxis scaleName="attendance" position="right" showGrid={true} />

                <BarSeries
                    name="Marks"
                    valueField="marks"
                    argumentField="student"
                    scaleName="marks"
                />
                <BarSeries
                    name="Attendance"
                    valueField="attendance"
                    argumentField="student"
                    scaleName="attendance"
                />

                <Legend />
                <Title text="Student Marks and Attendance" />
            </Chart>
        </Box>
    );
};

export default BarChart;
