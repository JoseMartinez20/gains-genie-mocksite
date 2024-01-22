import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

let date1 = Date("8", "8", "2023");
let date2 = Date("8", "9", "2023");
let date3 = Date("8", "10", "2023");
let date4 = Date("8", "11", "2023");

const dates = [date1, date2, date3, date4];

const minsWorkedOut = [100, 105, 110, 110];

const Graph = () => {
  useEffect(() => {
    // Get the canvas context
    const ctx = document.getElementById("myChart").getContext("2d");

    // Create a chart instance
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Dataset 1",
            data: minsWorkedOut,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Optionally, update chart data dynamically
    // myChart.data.datasets[0].data = [40, 50, 60];
    // myChart.update();

    // Cleanup when component unmounts
    // return () => {
    //   myChart.destroy();
    // };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

function Summary() {
  return (
    <Box>
      <h1>Summary</h1>
      <GraphLabel>
        <h2> Amount of Time Worked Out</h2>
        {Graph}
      </GraphLabel>
    </Box>
  );
}

const GraphLabel = styled.div.attrs({
  className: "GraphLabel",
})`
  width: 196.27;
  height: 25.65;
  text-align: "center";
  color: "black";
  font-size: 14;
  font-family: "Inter";
  font-weight: "400";
`;

const GraphStyle = styled.div.attrs({
  className: "GraphStyle",
})`
  width: 400;
  height: 400;
`;

const Box = styled.div.attrs({
  className: "Box",
})`
  height: 1265px;
  width: 409px;
  background-color: #ffffff;
  right: 0;
  position: absolute;
  top: 50px;
  align-self: center;
`;

export default Summary;
