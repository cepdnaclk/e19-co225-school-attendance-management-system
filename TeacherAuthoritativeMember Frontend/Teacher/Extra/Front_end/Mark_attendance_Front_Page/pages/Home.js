import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();

  }, []);

  //Used to fetch the data from the database
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/attendees`);
    const usersWithDefaultAttendance = result.data.map(user => ({
      ...user,
      markAttendance: 'absent' // Set default attendance value
    }));
    setUsers(usersWithDefaultAttendance);
    //setUsers(result.data);
  };

  //Used to update the markattendance status in the empty list
  const markAttendance = (id, status = 'absent') => {
    // Update the attendance in the frontend state first
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, markAttendance: status };
      }
      return user;
    });
    setUsers(updatedUsers);
  
    {/*// Prepare the data to be sent in the PUT requests
    const data = {
      markAttendance: status,
      timestamp: new Date().toISOString(),
    };
  
    // Define the PUT requests
    const updateUserRequest = axios.put(`http://localhost:8080/user/${id}`, data);
    const updateUserAttendanceRequest = axios.put(`http://localhost:8080/users/${id}`, data);
  
    // Make the PUT requests concurrently using Promise.all
    Promise.all([updateUserRequest, updateUserAttendanceRequest])
      .then(() => {
        console.log(`Attendance for user ${id} updated in the database.`);
      })
      .catch((error) => {
        console.error('Error updating attendance:', error);
      });*/}
    // Prepare the data to be sent in the POST request
  const studentData = updatedUsers.find(user => user.id === id); // Find the student with the matching ID
  const data = {
    ...studentData,
    markAttendance: status,
    timestamp: new Date().toISOString(),
  };

  axios.post(`http://localhost:8080/student_post`, data)
    .then(() => {
      console.log('New student added successfully.');
    })
    .catch((error) => {
      console.error('Error adding new student:', error);
    });

  };

  const sendMail = (userId) => {
    axios.post(`http://localhost:8080/${userId}/send-email`)
      .then(() => {
        console.log('Mail sent successfully.');
      })
      .catch((error) => {
        console.error('Error sending mail:', error);
      });
  };

  
  

  return (
    <div className="Container" style={{ margin: '0 auto', width: '50%' }}>
      <div className="py-4">
        <table className="table" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', width: '10%' }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', width: '80%' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', width: '10%' }}>MARK ATTENDANCE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  <div style={{ display: 'inline-block' }}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`attendance-${user.id}`}
                      id={`attendance-${user.id}-present`}
                      value="present"
                      onChange={() => markAttendance(user.id, 'present')}
                    />
                  </div>
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button onClick={() => sendMail(user.id)}>Send Mail</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*<div>
        <button onClick={() => sendMail(user.id)}>Send Mail</button>
            </div>*/}

      <style>
        {`
          table {
            border-collapse: separate;
            border-spacing: 0 10px;
          }
          th, td {
            text-align: left;
            padding: 8px;
            border: 1px solid #ddd;
          }
          tr:nth-child(even) {
            background-color: #f2f2f2;
          }
        `}
      </style>
    </div>
  );
}