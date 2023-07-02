import './App.css';
import React, { useState, useEffect } from 'react';
import {Pie} from 'react-chartjs-2';
import 'chart.js/auto';


function App() {
  const [grade, setGrade] = useState(''); // State to store the selected grade
  const [absentCount, setAbsentCount] = useState(0);
  const [presentCount, setPresentCount] = useState(0);
  const [attendanceCounts, setAttendanceCounts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/attendance/absentCount')
      .then(response => response.json())
      .then(data => setAbsentCount(data))
      .catch(error => console.error('Error:', error));

    fetch('http://localhost:8080/api/attendance/presentCount')
      .then(response => response.json())
      .then(data => setPresentCount(data))
      .catch(error => console.error('Error:', error));
  }, []);  

  const handleGetAttendanceCounts = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/attendance/gradeBasedAttendanceCount?grade=${grade}`);
      const data = await response.json();
      setAttendanceCounts(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const pieChartData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [presentCount, absentCount],
        backgroundColor: ['#2F8087', '#B2BEB5'],
        
      },
    ],
  };

  // Event handler for grade selection
  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };


  return (
    <body>
      <div className="App">
        <br />
        <h1>Hi, Authorityname</h1>
        <p className='para'>
          You will be able to monitor attendance trends, identify patterns, and address<br/>
          any concerns promptly. As anauthority officer, you play a pivotal role in<br/> 
          upholding the importance of regular attendance and fostering a positive<br/>
          learning environment for all students.
        </p>

        <div className='detail'>
        <h2 style={{color: 'black'}}>Attendance details of selected class</h2>
        <div>
              <label htmlFor="SearchDate" style={{fontWeight:"bold"}}>Enter Date:      </label>
              <input type="date" id="SearchDate" name="SearchDate" required />
        </div>
        <label htmlFor="gradeInput" style={{ fontWeight: 'bold' }}>Enter Grade:</label> 
        <input id="gradeInput" type="text" value={grade} onChange={handleGradeChange} style={{ width: '150px' }} />
        <br/> 
      <button onClick={handleGetAttendanceCounts} style={{ backgroundColor: '#D2B48C', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px' }}>Get Details</button>
      {attendanceCounts && (
        <div>
          <h2 style={{ color: 'black' }}>Attendance counts of grade {grade} Today</h2>
          <p style={{fontWeight:'bold'}}>Present: {attendanceCounts['true']}</p>
          <p style={{fontWeight:'bold'}}>Absent: {attendanceCounts['false']}</p>
        </div>
      )}
        </div>
        <div className='status'>
              <p>
                Today's Total attendees: {presentCount}<br/>
                Today's Total absentees:{absentCount}<br/>
                <br/>
                
                <div style={{ width: '250px', height: '250px',alignItems:'center',justify:'center',marginLeft: '50px',marginTop: '25px' }}>
                <Pie data={pieChartData} />
                </div>
              </p>    
        </div>
      </div>
    </body>
  );
}

export default App;
