import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/users');
    const usersWithDefaultAttendance = result.data.map(user => ({
      ...user,
      markAttendance: 'absent' // Set default attendance value
    }));
    setUsers(result.data);
  };

  const markAttendance = (id, status = 'absent') => {
    // Update the attendance in the frontend state first
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, markAttendance: status };
      }
      return user;
    });
    setUsers((prevUsers) => [
      ...prevUsers.map((user) => {
        const updatedUser = updatedUsers.find((updatedUser) => updatedUser.id === user.id);
        return updatedUser || user;
      }),
    ]);

    // Prepare the data to be sent in the PUT request
    const data = { markAttendance: status };

    // Make the PUT request to update the database
    axios
      .put(`http://localhost:8080/user/${id}`, data)
      .then(() => {
        console.log(`Attendance for user ${id} updated in the database.`);
      })
      .catch((error) => {
        console.error('Error updating attendance:', error);
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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