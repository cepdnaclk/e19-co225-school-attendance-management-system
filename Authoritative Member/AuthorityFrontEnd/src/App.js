import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PieChart from './PieChart.js';

function App() {
  const [selectedGrade, setSelectedGrade] = useState(''); // State to store the selected grade

  // Event handler for grade selection
  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setSubmitted(true); // Set the submitted state to true
  };

  // Define the division options based on the selected grade
  // Define the division options based on the selected grade
const getDivisionOptions = () => {
  const gradeNumber = Number(selectedGrade.slice(9)); // Extract the numeric part of the grade
  
  if (gradeNumber >= 2 && gradeNumber <= 11) {
    // Return options for grades 2 to 11
    return (
      <>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </>
    );
  } else {
    // Return options for other grades
    return (
      <>
        <option value="Bio">Bio</option>
        <option value="Physical science">Physical science</option>
        <option value="Arts A">Arts A</option>
        <option value="Arts B">Arts B</option>
        <option value="Commerce">Commerce</option>
        <option value="Bio Technology">Bio Technology</option>
        <option value="Engineering Technology">Engineering Technology</option>
      </>
    );
  }
  
};
const [submitted, setSubmitted] = useState(false); // State to track form submission

  // Event handler for form submission
  const handleSubmit = () => {
    setSubmitted(true); // Set the submitted state to true
  };


  return (
    <body>
      <div className="App">
        <br />
        <h1>Hi, Authorityname</h1>
        <p className='para'>
          You will be able to monitor attendance trends, identify patterns, and address <br/>
          any concerns promptly. As an authority officer, you play a pivotal role in <br/>
          upholding the importance of regular attendance and fostering a positive <br/>
          learning environment for all students.
        </p>
        <br/>
        <br/>
        <div className='detail'>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="SearchDate">Enter Date:</label>
              <input type="date" id="SearchDate" name="SearchDate" required />
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <select id="category" name="category" required onChange={handleGradeChange}>
                <option value="Category 1">Select a category</option>
                <option value="Category 2">Grade 1</option>
                <option value="Category 3">Grade 2</option>
                <option value="Category 4">Grade 3</option>
                <option value="Category 5">Grade 4</option>
                <option value="Category 6">Grade 5</option>
                <option value="Category 7">Grade 6</option>
                <option value="Category 8">Grade 7</option>
                <option value="Category 9">Grade 8</option>
                <option value="Category 10">Grade 9</option>
                <option value="Category 11">Grade 10</option>
                <option value="Category 12">Grade 11</option>
                <option value="Category 13">Grade 12</option>
                <option value="Category 14">Grade 13</option>
              </select>
            </div>
            <label htmlFor="division">Division:</label>
            <select id="division" name="division" required>
              <option value="">Select Division</option>
              {getDivisionOptions()}
            </select>
            <div></div>
            <input onClick={handleSubmit} type="submit" name="submit" value="Enter" />
            {submitted && (
              <>
                <p>Number of attendees: <br/>
                Number of absentees: </p>
              </>
            )}

          </form>
        </div>
        <div className='status'>
              <p>
                Today's Total attendees:<br/>
                Today's Total absentees:<br/>
                <br/>
                <br/>
                <br/>
                
                <PieChart /> 
              </p>
              
        </div>
        
      </div>
    </body>
  );
}

export default App;
