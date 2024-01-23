import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../sections/landingPage/HeroSection";
import NavBar from "./NavBar";
// import Profile from "./Profile";
import ChartComponent from "./ChartComponent";
import ProfileInfo from "../sections/dashboardPage/ProfileInfo";
import { Box } from "../../src/styles/texStyles";
import ProfileHeader from "../sections/dashboardPage/ProfileHeader";
import Achievements from "../sections/dashboardPage/AchievementsSection";

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
      <ProfileHeader />
      <NavBar />
      <BoxMiddle>
        {chartDataSets.map((chartData) => (
          <div>
            <ChartComponent key={chartData.id} dataset={chartData} />
          </div>
        ))}
      </BoxMiddle>
      <ProfileInfo />

      <div>
          <button onClick={() => handleOptionChange('profile')}>Profile Info</button>
          <button onClick={() => handleOptionChange('friends')}>Friends</button>
          <button onClick={() => handleOptionChange('leaderboard')}>Leaderboard</button>
      </div>

      {selectedOption === 'profile' && <ProfileInfo />}
        {selectedOption === 'friends' && <Friends />}
        {selectedOption === 'leaderboard' && <Leaderboard />}

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
  height: 270px;
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
