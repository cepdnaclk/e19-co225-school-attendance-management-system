import React, { useEffect, useRef } from 'react';

const PieChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Data for the pie chart
    const data = [
      { label: 'A', value: 30 },
      { label: 'B', value: 50 },
    ];

    const total = data.reduce((sum, { value }) => sum + value, 0);
    let startAngle = 0;

    // Draw the pie slices
    data.forEach(({ label, value }) => {
      const sliceAngle = (value / total) * 2 * Math.PI;

      context.beginPath();
      if(label=='A'){
        context.fillStyle = '#fff';
      }else{
        context.fillStyle = '#67E7EC';
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
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <canvas ref={canvasRef} width={200} height={200} />
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#fff' }}></div>
          <p style={{ marginLeft: '5px' }}>A</p>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#67E7EC' }}></div>
          <p style={{ marginLeft: '5px' }}>B</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
