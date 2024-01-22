import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import profileImage from "../assets/profile-icon.png";
import historyImage from "../assets/history-icon.png";
import routinesImage from "../assets/routine-icon.png";
import exercisesImage from "../assets/exercise-icon.png";
import nutritionImage from "../assets/nutrition-icon.png";
import settingsImage from "../assets/settings-icon.png";

function NavBar() {
  return (
    // <div className="DashboardIcon" style={{width: 218.74, height: 1264.81, background: 'white'}}>
    //   <div className="DashboardSection" style={{width: 131.66, height: 30.38, position: 'relative'}}>
    //     <div className="Dashboard" style={{width: 90.41, height: 30.14, color: 'black', fontSize: 16.92, fontFamily: 'Inter', fontWeight: '400', position: 'absolute', left: 41.25}}>Dashboard</div>
    //     <img className="ProfileIcon" style={{width: 28.40, height: 29.61, position: 'absolute'}} src={profileImage} />
    //   </div>
    //   <div className="DashboardSection" style={{width: 131.66, height: 30.38, position: 'relative'}}>
    //     <div className="History" style={{width: 61.64, height: 30.22, color: 'black', fontSize: 16.92, fontFamily: 'Inter', fontWeight: '400'}}>History</div>
    //     <img className="HistoryIcon" style={{width: 32.68, height: 33.84}} src={historyImage} />
    //   </div>
    // <div className="Routine" style={{width: 90.41, height: 30.14, color: 'black', fontSize: 16.92, fontFamily: 'Inter', fontWeight: '400'}}>Routines</div>
    // <img className="RoutineIcon" style={{width: 28.40, height: 29.61}} src={routinesImage} />
    // <div className="Dashboard" style={{width: 90.41, height: 30.14, color: 'black', fontSize: 16.92, fontFamily: 'Inter', fontWeight: '400'}}>Exercises</div>
    // <img className="ProfileIcon" style={{width: 28.40, height: 29.61}} src={exercisesImage} />
    // <div className="History" style={{width: 61.64, height: 30.22, color: 'black', fontSize: 16.92, fontFamily: 'Inter', fontWeight: '400'}}>Nutrition</div>
    // <img className="HistoryIcon" style={{width: 32.68, height: 33.84}} src={nutritionImage} />
    // <div className="Routine" style={{width: 90.41, height: 30.14, color: 'black', fontSize: 16.92, fontFamily: 'Inter', fontWeight: '400'}}>Settings</div>
    // <img className="RoutineIcon" style={{width: 28.40, height: 29.61}} src={settingsImage} />
    // </div>

    <Section>
      <SectionGroup>
        <SectionImage>
          {" "}
          <img src={profileImage} />{" "}
        </SectionImage>
        <SectionTitle> Dashboard </SectionTitle>
      </SectionGroup>
      <SectionGroup>
        <SectionImage>
          {" "}
          <img src={historyImage} />{" "}
        </SectionImage>
        <SectionTitle> History </SectionTitle>
      </SectionGroup>
      <SectionGroup>
        <SectionImage>
          {" "}
          <img src={routinesImage} />{" "}
        </SectionImage>
        <SectionTitle> Routines </SectionTitle>
      </SectionGroup>
      <SectionGroup>
        <SectionImage>
          {" "}
          <img src={exercisesImage} />{" "}
        </SectionImage>
        <SectionTitle> Fitness </SectionTitle>
      </SectionGroup>
      <SectionGroup>
        <SectionImage>
          {" "}
          <img src={nutritionImage} />{" "}
        </SectionImage>
        <SectionTitle> Nutrition </SectionTitle>
      </SectionGroup>
      <SectionGroup>
        <SectionImage>
          {" "}
          <img src={settingsImage} />{" "}
        </SectionImage>
        <SectionTitle> Settings </SectionTitle>
      </SectionGroup>
    </Section>

    // <Section>
    //   <SectionGroup>
    //   <SectionImage> <img src={profileImage}/> </SectionImage>
    //   <SectionTitle> <p>Dashboard</p> </SectionTitle>
    //   </SectionGroup>
    //   <SectionGroup>
    //   <SectionImage> <img src={historyImage}/> </SectionImage>
    //   <SectionTitle> <p>History</p> </SectionTitle>
    //   </SectionGroup>
    // </Section>
  );
}

const Section = styled.div.attrs({
  className: "Section",
})`
  height: 1265px;
  width: 219px;
  background-color: #ffffff;
  left: 0;
  position: absolute;
  top: 100;
`;

const SectionGroup = styled.div.attrs({
  className: "SectionGroup",
})`
  width: 131.66px;
  height: 30.38px;
  position: "relative";
  display: inline-block, flex;
  padding: 10px;
`;

const SectionImage = styled.div.attrs({
  className: "SectionImage",
})`
  width: 28.4px;
  height: 29.61px;
  position: "absolute";
  display: inline-block;
  position: 50px;
`;

const SectionTitle = styled.div.attrs({
  className: "SectionTitle",
})`
  width: 90.41px;
  height: 30.14px;
  color: "black";
  border: 5px;
  font-size: 16.92px;
  font-family: "Inter";
  font-weight: "400";
  position: "absolute";
  display: inline-block;
  margin-left: 10px;
`;

export default NavBar;
