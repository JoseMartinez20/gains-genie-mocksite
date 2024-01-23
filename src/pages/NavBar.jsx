import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import profileImage from "../assets/profile-icon.png";
import historyImage from "../assets/history-icon.png";
import routinesImage from "../assets/routine-icon.png";
import exercisesImage from "../assets/exercise-icon-updated.png";
import nutritionImage from "../assets/nutrition-icon.png";
import settingsImage from "../assets/settings-icon.png";

function NavBar() {
  return (
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
          <img src={exercisesImage} className="fit-image"/>{" "}
        </SectionImage>
        <SectionTitle> Exercise </SectionTitle>
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
  display: flex;
  flex-direction: row;
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
