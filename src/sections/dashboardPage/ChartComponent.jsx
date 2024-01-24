import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import styled from "styled-components";
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
    <GraphSection>
      <GraphLabel> {dataset.label} </GraphLabel>
      <canvas id={`myChart-${dataset.id}`}></canvas>
    </GraphSection>
  );
};

const GraphSection = styled.div.attrs({
  className: "GraphSection",
})`
  margin: auto;
  width: 400px;
  height: 500px;
  padding: 30px;
`;

const GraphLabel = styled.div.attrs({
  className: "GraphLabel",
})`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  font-style: italic;
  border: 5px;
`;

export default ChartComponent;
