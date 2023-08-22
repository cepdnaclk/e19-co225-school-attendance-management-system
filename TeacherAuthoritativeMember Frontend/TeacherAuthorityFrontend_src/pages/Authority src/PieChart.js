import React, { useEffect, useRef } from 'react';

const PieChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Data for the pie chart
    const data = [
      { label: 'A', value: 50 },
      { label: 'B', value: 30 },
    ];

    const total = data.reduce((sum, { value }) => sum + value, 0);
    let startAngle = 0;

    // Draw the pie slices
    data.forEach(({ label, value }) => {
      const sliceAngle = (value / total) * 2 * Math.PI;

      context.beginPath();
      if(label==='A'){
        context.fillStyle = '#2F8087';
      }else{
        context.fillStyle = '#fff';
      }
      //context.fillStyle = getRandomColor();
      context.moveTo(canvas.width / 2, canvas.height / 2);
      context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, startAngle, startAngle + sliceAngle);
      context.closePath();
      context.fill();

      startAngle += sliceAngle;
    });
  }, []);

  // Helper function to generate random colors
  

  return (
    <div>
      <canvas ref={canvasRef} width={200} height={200} />
      <div>
        <div style={{ marginLeft: '250px',marginTop: '-150px',display: 'flex' }}>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#2F8087' }}></div>
          <p style={{ marginLeft: '15px', marginTop: '0', lineHeight: '15px' ,fontSize: '15px'}}>Attendees</p>
        </div>
        <div style={{ marginLeft: '250px',marginTop: '5px',display: 'flex' }}>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#fff' }}></div>
          <p style={{ marginLeft: '15px', marginTop: '0', lineHeight: '15px' ,fontSize: '15px'}}>Absentees</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
