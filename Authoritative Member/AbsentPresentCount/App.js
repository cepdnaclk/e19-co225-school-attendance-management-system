import './App.css';
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function App() {
  const [grade, setGrade] = useState('');
  const [absentCount, setAbsentCount] = useState(0);
  const [presentCount, setPresentCount] = useState(0);
  const [attendanceCounts, setAttendanceCounts] = useState(null);
  const [studentId, setStudentId] = useState('');
  const [studentStatus, setStudentStatus] = useState('');

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

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleEnterButtonClick = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/attendance/studentAttendance?studentId=${studentId}`);
      const data = await response.json();
      setStudentStatus(data.attendanceStatus ? 'Present' : 'Absent');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <body>
      <div className="App">
        <br />
        <h1>Welcome Principal</h1>
        <p className="para" style={{ width: '60%' }}>
          You will be able to monitor attendance trends, identify patterns, and address any concerns promptly. As an authority officer, you play a pivotal role in upholding the importance of regular attendance and fostering a positive learning environment for all students.
        </p>
        <div className="status" style={{ height: '525px', padding: '20px' }}>
          <p>
            Today's Total attendees: {presentCount}<br />
            Today's Total absentees: {absentCount}<br />
            <br />
            <br />
            <br />
            <div style={{ width: '250px', height: '250px', alignItems: 'center', justifyContent: 'center', marginLeft: '50px', marginTop: '25px' }}>
              <Pie data={pieChartData} />
            </div>
          </p>
        </div>

        <div className="detail" style={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: 'black', textAlign: 'center' }}>Attendance details of selected class</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="SearchDate" style={{ fontWeight: 'bold' }}>Enter Date:</label>
            <input type="date" id="SearchDate" name="SearchDate" required style={{ width: '150px', borderRadius: '4px' }} />
            <label htmlFor="gradeInput" style={{ fontWeight: 'bold', marginRight: '10px' }}>Enter Class:</label>
            <input id="gradeInput" type="text" value={grade} onChange={handleGradeChange} style={{ width: '150px', borderRadius: '4px' }} />
          </div>
          <br />

          {attendanceCounts && (
            <div>
              <h4 style={{ color: 'black', textAlign: 'center' }}>Attendance counts of class {grade} Today</h4>
              <p style={{ fontWeight: 'bold' }}>Present: {attendanceCounts['true']}</p>
              <p style={{ fontWeight: 'bold' }}>Absent: {attendanceCounts['false']}</p>
            </div>
          )}

          <button
            onClick={handleGetAttendanceCounts}
            style={{
              backgroundColor: '#D2B48C',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              marginTop: 'auto',
            }}>
            Get Details
          </button>
        </div>

        <br />
        <div className="StudentAttendanceBasedOnId" style={{ background: 'rgba(255, 255, 255, 0.5)', padding: '10px', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '61%' }}>
          <label htmlFor="studentIdInput" style={{ fontWeight: 'bold' }}>Enter Student ID:</label>
          <input id="studentIdInput" type="text" value={studentId} onChange={handleStudentIdChange} style={{ width: '150px', borderRadius: '4px' }} />
          <div style={{ marginTop: 'auto' }}>
            {attendanceCounts && (
              <div>
                <h2 style={{ color: 'black', textAlign: 'center' }}>Attendance details of Student ID: {studentId}</h2>
                {studentStatus !== '' && (
                  <p style={{ fontWeight: 'bold' }}>Status: {studentStatus}</p>
                )}
              </div>
            )}
            <button onClick={handleEnterButtonClick} style={{ background: '#D2B48C', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', alignItems: 'center' }}>Get Status</button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
