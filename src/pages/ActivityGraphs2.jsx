import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const ChartComponent = ({ dataset }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById(`myChart-${dataset.id}`).getContext('2d');

    // Get the existing Chart instance associated with the canvas
    const existingChart = Chart.getChart(ctx);

    // Destroy the existing Chart instance if it exists
    if (existingChart) {
      existingChart.destroy();
    }

    // Create a new Chart instance with the dataset
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dataset.xValues,
        datasets: [{
          label: dataset.label,
          data: dataset.yValues,
          backgroundColor: dataset.backgroundColor || 'rgba(75, 192, 192, 0.2)',
          borderColor: dataset.borderColor || 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Save the reference to the Chart instance
    chartRef.current = newChart;

    // Cleanup when component unmounts
    return () => {
      newChart.destroy();
    };
  }, []);

  return (
    <div style={{ width: '50%', margin: '0 auto', display: 'block' }}>
      <canvas id={`myChart-${dataset.id}`} width="400" height="200"></canvas>
    </div>
  );
};

export default ChartComponent;