import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../sections/landingPage/HeroSection";
import NavBar from "./NavBar";
import Profile from "./Profile";
import ChartComponent from "./ChartComponent";
import ProfileInfo from "./ProfileInfo";
import { Box } from "../../src/styles/texStyles";
import Header from "../components/header";

function Dashboard() {
  const chartDataSets = [
    {
      id: 1,
      xValues: ["Label 1", "Label 2", "Label 3"],
      yValues: [10, 20, 30],
      label: "Dataset 1",
    },
    {
      id: 2,
      xValues: ["Label A", "Label B", "Label C"],
      yValues: [15, 25, 35],
      label: "Dataset 2",
    },
    // Add more data sets as needed
  ];

  return (
    <div>
      <Header />
      <NavBar />
      <h1> Summary </h1>
      <BoxMiddle>
        {chartDataSets.map((chartData) => (
          <div>
            <GraphLabel> {JSON.stringify(chartData.label)} </GraphLabel>
            <ChartComponent key={chartData.id} dataset={chartData} />
          </div>
        ))}
      </BoxMiddle>
      <BoxRight>

      </BoxRight>
    </div>
  );
}
export default Dashboard;

const BoxMiddle = styled(Box).attrs({
  className: "BoxMiddle",
})`
  position: absolute;
  height: 1265px;
  width: 500px;
  background-color: #ffffff;
  left: 20%;
  right: 90%;
  top: 100;
  border-radius: 30px;
`;

const BoxTopRight = styled(Box).attrs({
  className: "BoxTopRight",
})`
  width: 453px; 
  height: 470px; 
  background-color: #ffffff;
  left: 60%;
  right: 10%;
  border-radius: 30px;
`;

const GraphLabel = styled.div.attrs({
  className: "GraphLabel",
})`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  font-style: italic;
`;
