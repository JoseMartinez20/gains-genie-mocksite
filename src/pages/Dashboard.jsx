import React from "react";
import { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Profile from "../sections/dashboardPage/Profile";
import ProfileHeader from "../sections/dashboardPage/ProfileHeader";
import Achievements from "../sections/dashboardPage/AchievementsSection";
import Charts from "../sections/dashboardPage/Charts";

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

  return (
    <DashboardDiv>
      <ProfileHeader />

      <DashboardMinusHeader>
        <NavBar />
          <ChartsProfileandAchievements>
          <Charts chartDataSets={chartDataSets} />

          <ProfileandAchievements>
            <Profile
              healthMetricsSets={healthMetricsSets}
              friends={friends}
              leaders={leaders}
            />

          <Achievements />
        </ProfileandAchievements>
        </ChartsProfileandAchievements>
      </DashboardMinusHeader>
    </DashboardDiv>
  );
}
export default Dashboard;

const DashboardDiv = styled.div.attrs({
  className: "DashboardDiv",
})`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  /* align-items: stretch; */
`;

const DashboardMinusHeader = styled.div.attrs({
  className: "DashboardMinusHeader",
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
`;

const ChartsProfileandAchievements = styled.div.attrs({
  className: "ChartsProfileandAchievements"
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ProfileandAchievements = styled.div.attrs({
  className: "ProfileandAchievements"
})`
  display: flex;
  flex-direction: column;
`;
