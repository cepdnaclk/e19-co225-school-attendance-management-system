import React from "react";
import {Box} from "@mui/material";
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
  
  
const App = () => {
  
// Sample data
const data = [
  { argument:'Monday', value:10 },
  { argument:'Tuesday', value:40 },
  { argument:'Wednesday', value:10 },
  { argument:'Thursday', value:20 },
  { argument:'Friday', value:20 },
];
return (
    <Box>
    <Chart
      data={data}
    >
      <PieSeries valueField="value" argumentField="argument" />
      
    </Chart>
  </Box>
);
}
  
export default App;