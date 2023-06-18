import React, { useState } from 'react';
import './App.css';
import buttonImage1 from './attandance.jpg';
import buttonImage2 from './student.png';
import buttonImage3 from './parent.png';
import buttonImage4 from './statics.png';
import Calendar from 'react-calendar';




function App() {
  const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const tileDisabled = ({ date }) => {
      const currentMonth = selectedDate.getMonth();
      const currentYear = selectedDate.getFullYear();
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  
      return date < firstDayOfMonth || date > lastDayOfMonth;
    };
    const tileClassName = ({ date }) => {
      const today = new Date();
      if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
        return 'today';
      }
      return '';
    };
    return (
      <div className="calendar-container">
        <h2>Calendar</h2>
        <Calendar onChange={handleDateChange} value={selectedDate} tileClassName={tileClassName} tileDisabled={tileDisabled}/>
      </div>
    );
  };
  
 return (
    <body>
      <div className="App">
      <h1>Hi, Teacher_name</h1>
      <p className= 'para'>Wel come to <br/><br/>SamS!
      </p>
      <CalendarComponent />
      <div className='divbutton'>
        <div className="button-group">
          <a href="https://example.com" className="btn btn1">
            Mark attendance<br/><br/>
            <img  src={buttonImage1} alt="Button 1" className= 'button-image'/>
          </a>
          <a href="https://example.com" className="btn btn2">
            Student<br/><br/>
            <img  src={buttonImage2} alt="Button 1" className= 'button-image'/>
          </a>
        </div>

        <div className="button-group">
          <a href="https://example.com" className="btn btn3">
            Parent<br/><br/>
            <img  src={buttonImage3} alt="Button 1" className= 'button-image'/>
          </a>
          <a href="https://example.com" className="btn">
            Status<br/><br/>
            <img  src={buttonImage4} alt="Button 1" className= 'button-image'/>
          </a>
        </div>
      </div>
       
      </div>
    </body>
  );
}


export default App;
