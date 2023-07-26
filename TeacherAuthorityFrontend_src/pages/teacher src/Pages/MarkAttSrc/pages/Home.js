import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Height } from '@mui/icons-material';


export default function Home() {
  const [attendees, setAttendees] = useState([]);
  const [clickedButtons, setClickedButtons] = useState([]);

  useEffect(() => {
    loadAttendees();
  }, []);

  // Used to fetch the data from the database
  const loadAttendees = async () => {
    const result = await axios.get(`http://localhost:8080/attendees`);
    const attendeesWithDefaultAttendance = result.data.map((attendee) => ({
      ...attendee,
      markAttendance: 'absent' // Set default attendance value
    }));
    setAttendees(attendeesWithDefaultAttendance);
  };

  // Used to update the markattendance status in the empty list
  const markAttendance = (id, status = 'absent') => {
    // Update the attendance in the frontend state first
    const updatedAttendees = attendees.map((attendee) => {
      if (attendee.id === id) {
        return { ...attendee, markAttendance: status };
      }
      return attendee;
    });
    setAttendees(updatedAttendees);

    // Prepare the data to be sent in the PUT requests
    const data = {
      markAttendance: status,
      timestamp: new Date().toISOString()
    };

    // Define the PUT requests
    const updateAttendeeRequest = axios.put(`http://localhost:8080/attendee/${id}`, data);
    const updateAttendeeAttendanceRequest = axios.put(`http://localhost:8080/attendees/${id}`, data);

    // Make the PUT requests concurrently using Promise.all
    Promise.all([updateAttendeeRequest, updateAttendeeAttendanceRequest])
      .then(() => {
        console.log(`Attendance for attendee ${id} updated in the database.`);
      })
      .catch((error) => {
        console.error('Error updating attendance:', error);
      });
  };

  const sendMail = (attendeeId) => {
    axios
      .post(`http://localhost:8080/${attendeeId}/send-email`)
      .then(() => {
        console.log('Mail sent successfully.');
      })
      .catch((error) => {
        console.error('Error sending mail:', error);
      });
  };

  {/*const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (attendeeId) => {
    setClickedButton(attendeeId);
    sendMail(attendeeId);
  };*/}

  const handleButtonClick = (attendeeId) => {
    setClickedButtons((prevClickedButtons) => [...prevClickedButtons, attendeeId]);
    sendMail(attendeeId);
  };

  return (
    <div className="Container" style={{ margin: '0 auto', width: '50%' }}>
      <div className="py-4">
        <table className="table" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', width: '10%' }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', width: '60%' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', width: '10%' }}>MARK ATTENDANCE</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', width: '20%' }}></th>

            </tr>
          </thead>
          <tbody>
            {attendees.map((attendee, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{attendee.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{attendee.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  <div style={{ display: 'inline-block' }}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`attendance-${attendee.id}`}
                      id={`attendance-${attendee.id}-present`}
                      value="present"
                      onChange={() => markAttendance(attendee.id, 'present')}
                    />
                  </div>
                </td>
                {/*<td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button onClick={() => sendMail(attendee.id)}>Send Mail</button>
            </td>*/}
                {/*<td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button
                    onClick={() => handleButtonClick(attendee.id)}
                    style={{
                      backgroundColor: clickedButton === attendee.id ? 'white' : 'blue',
                      color: clickedButton === attendee.id ? 'black' : 'white'
                    }}
                  >
                    Send Mail
                  </button>
                  </td>*/}
                <td style={{ border: '1px solid #ddd', padding: '16px' }}>
                  <button
                    onClick={() => handleButtonClick(attendee.id)}
                    style={{
                      backgroundColor: clickedButtons.includes(attendee.id) ? 'white' : 'blue',
                      color: clickedButtons.includes(attendee.id) ? 'black' : 'white',
                      width: '100%',
                    }}
                  >
                    Send Mail
                  </button>
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
