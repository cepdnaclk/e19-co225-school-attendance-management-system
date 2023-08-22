import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js';
import './src/App.css';

export default function ViewStatus() {
  const [students, getStatus] = useState([]);

  useEffect(() => {
    loadStatus();
  }, []);

  const loadStatus = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/statusall`);
      getStatus(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderChart();
  }, [students]);

  const renderChart = () => {
    const labels = students.map((student) => student.id);
    const data = students.map((student) => student.percentage);

    const ctx = document.getElementById('statusChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Student attendance Percentage of Last month',
            data: data,
            backgroundColor: data.map(() => 'rgba(130, 43, 120, 0.6)'),
            borderColor: 'rgba(130, 43, 120, 1)',
            borderWidth: 1,
            
            
          },
        ],
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Student ID',
            },
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Percentage',
            },
            ticks: {
              min: 0,
              max: 100,
              stepSize: 10,
            },
          }],
        },
      },
    });
  };

  return (
    <body className='appbody'>
    <div className='ViewStatusApp'>
    <h1 style={{ textAlign: 'center' }}>View Status</h1>

      <div className="graphdiv" style={{ width: '800px', height: '500px' } }>
        <canvas id="statusChart" />
      </div>
      {students.map((student) => (
        <div key={student.id}>
          <p>Student ID: {student.id}<br/>
          Student present days: {student.days_present}<br/>
          Student present percentage: {student.percentage}<br/></p>
          <hr />
        </div>
      ))}
    </div>
    </body>
  );
}
