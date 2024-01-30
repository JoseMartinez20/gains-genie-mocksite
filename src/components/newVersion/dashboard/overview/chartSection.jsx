import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";

const workoutData = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  datasets: [
    {
      label: "Workout Time (hours)",
      data: [1, 1.5, 2, 1.2, 1.4, 1.3, 1.6], // Example data
      backgroundColor: "rgba(54, 162, 235, 0.6)", // Custom bar background color
      borderColor: "rgba(54, 162, 235, 1)", // Custom bar border color
      borderWidth: 1, // Border width
      borderRadius: 10, // Rounded corners for bars
      hoverBackgroundColor: "#fff",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Hours",
      },
    },
    x: {
      grid: {
        display: false, // Removes vertical grid lines
      },
      title: {
        display: true,
        text: "Days of the Week",
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
};

function ChartSection() {
  return (
    <Container>
      <Bar data={workoutData} options={options} />
    </Container>
  );
}
export default ChartSection;

const Container = styled.div.attrs({
  className: "Chart Section Container",
})`
  display: flex;
  height: 330px;
  max-width: 630px;
  padding: var(--24, 24px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--16, 16px);
  flex: 1 0 0;
  border-radius: var(--16, 16px);
  background: var(--Primary-Light, #f7f9fb);
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
`;
