import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../sections/landingPage/HeroSection";
import NavBar from "./NavBar";
import ChartComponent from "./ChartComponent";
import ProfileInfo from "../sections/dashboardPage/ProfileInfo";
import { Box } from "../../src/styles/texStyles";
import ProfileHeader from "../sections/dashboardPage/ProfileHeader";
import Achievements from "../sections/dashboardPage/AchievementsSection";
import ProfileButtonsSection from "../sections/dashboardPage/ProfileButtonsSection";

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

  const healthMetricsSets = [
    ["Weight", 180],
    ["Height", 72],
    ["Calorie Intake", 2500],
  ];

  const friends = [
    {
      name: "Jose Martinez",
      username: "jmarti358",
      profile: null,
      picture: null,
    },
    {
      name: "Jessica Jimenez",
      username: "jessjime499",
      profile: null,
      picture: null,
    },
  ];

  const leaders = [
    {
      name: "Jose Martinez",
      PR_gain: "15 lbs",
    },
    {
      name: "Jessica Jimenez",
      PR_gain: "35 lbs",
    },
  ];

  const [selectedToggle, setSelectedToggle] = useState("profile");

  const handleOptionChange = (option) => {
    setSelectedToggle(option);
  };

  return (
    <div>
      <ProfileHeader />
      <NavBar />
      <BoxMiddle>
        {chartDataSets.map((chartData) => (
          <div>
            <ChartComponent key={chartData.id} dataset={chartData} />
          </div>
        ))}
      </BoxMiddle>

      <BoxTopRight>
        <ProfileInfo />

        <ProfileButtonsSection
          healthMetricsSets={healthMetricsSets}
          friends={friends}
          leaders={leaders}
        />
      </BoxTopRight>
      <Achievements />
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
  top: 7%;
  border-radius: 30px;
`;

const BoxTopRight = styled(Box).attrs({
  className: "BoxTopRight",
})`
  position: absolute;
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
