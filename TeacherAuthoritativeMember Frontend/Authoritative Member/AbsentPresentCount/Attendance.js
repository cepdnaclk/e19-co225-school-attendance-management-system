<<<<<<< Updated upstream
import React, { useState , useEffect} from 'react';
import {Pie} from 'react-chartjs-2';
import 'chart.js/auto';

function App() {
  const [grade, setGrade] = useState('');
  const [attendanceCounts, setAttendanceCounts] = useState(null);
  const [absentCount, setAbsentCount] = useState(0);
  const [presentCount, setPresentCount] = useState(0);

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  const handleGetAttendanceCounts = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/attendance/gradeBasedAttendanceCount?grade=${grade}`);
      const data = await response.json();
      setAttendanceCounts(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

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

  const pieChartData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [presentCount, absentCount],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div>
      <h1>Attendance App</h1>
      <label htmlFor="gradeInput">Enter Grade:</label>
      <input id="gradeInput" type="text" value={grade} onChange={handleGradeChange} />
      <button onClick={handleGetAttendanceCounts}>Get Attendance Counts</button>

      {attendanceCounts && (
        <div>
          <h2>Attendance Counts Of Grade {grade} Today</h2>
          <p>Present: {attendanceCounts['true']}</p>
          <p>Absent: {attendanceCounts['false']}</p>
        </div>
      )}

          <h2>Total Attendance Of School Today</h2>
          <p>Absent Students: {absentCount}</p>
          <p>Present Students: {presentCount}</p>

          <div style={{ width: '400px', height: '400px' }}>
          <Pie data={pieChartData} />
          </div>
    </div>
    
  );
}

export default App;
=======
import React, { useState , useEffect} from 'react';
import {Pie} from 'react-chartjs-2';
import 'chart.js/auto';

function App() {
  const [grade, setGrade] = useState('');
  const [attendanceCounts, setAttendanceCounts] = useState(null);
  const [absentCount, setAbsentCount] = useState(0);
  const [presentCount, setPresentCount] = useState(0);

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  const handleGetAttendanceCounts = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/attendance/gradeBasedAttendanceCount?grade=${grade}`);
      const data = await response.json();
      setAttendanceCounts(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

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

  const pieChartData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [presentCount, absentCount],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div>
      <h1>Attendance App</h1>
      <label htmlFor="gradeInput">Enter Grade:</label>
      <input id="gradeInput" type="text" value={grade} onChange={handleGradeChange} />
      <button onClick={handleGetAttendanceCounts}>Get Attendance Counts</button>

      {attendanceCounts && (
        <div>
          <h2>Attendance Counts Of Grade {grade} Today</h2>
          <p>Present: {attendanceCounts['true']}</p>
          <p>Absent: {attendanceCounts['false']}</p>
        </div>
      )}

          <h2>Total Attendance Of School Today</h2>
          <p>Absent Students: {absentCount}</p>
          <p>Present Students: {presentCount}</p>

          <div style={{ width: '400px', height: '400px' }}>
          <Pie data={pieChartData} />
          </div>
    </div>
    
  );
}

export default App;
>>>>>>> Stashed changes
