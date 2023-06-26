import React, { useState, useEffect } from 'react';

const Attendance = () => {
  const [absentCount, setAbsentCount] = useState(0);
  const [presentCount, setPresentCount] = useState(0);

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

  return (
    <div>
      <h2>Attendance Information</h2>
      <p>Absent Students: {absentCount}</p>
      <p>Present Students: {presentCount}</p>
    </div>
  );
};

export default Attendance;
