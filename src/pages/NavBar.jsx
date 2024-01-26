import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/gym-genie-logo-smaller.png";
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
        <ProfileImage>
          {" "}
          <img src={logoImage} height="20" width="30" />{" "}
        </ProfileImage>
        <ProfileTitle> Gym Genie</ProfileTitle>
      </SectionGroup>
      <SectionGroup>
        <SectionImage>
          {" "}
          <img src={profileImage} />{" "}
        </SectionImage>
        <SectionTitle>
          {" "}
          <Link to="/dashboard">Dashboard</Link>{" "}
        </SectionTitle>
      </SectionGroup>
      <Link to="/history">
        <SectionGroup>
          <SectionImage>
            {" "}
            <img src={historyImage} />{" "}
          </SectionImage>
          <SectionTitle> History </SectionTitle>
        </SectionGroup>
      </Link>
      <SectionGroup>
        <SectionImage>
          {" "}
          <img src={routinesImage} />{" "}
        </SectionImage>
        <SectionTitle>
          {" "}
          <Link to="/routines">Routines</Link>{" "}
        </SectionTitle>
      </SectionGroup>
      <Link to="/exercise">
        <SectionGroup>
          <SectionImage>
            {" "}
            <img src={exercisesImage} className="fit-image" />{" "}
          </SectionImage>
          <SectionTitle> Exercise </SectionTitle>
        </SectionGroup>
      </Link>
      <SectionGroup>
        <SectionImage>
          {" "}
          <img src={nutritionImage} />{" "}
        </SectionImage>
        <SectionTitle>
          {" "}
          <Link to="/nutrition">Nutrition</Link>{" "}
        </SectionTitle>
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
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  height: 1265px;
  width: 319px;
  background-color: #ffffff;
  left: 0;
  /* position: relative; */
  border-radius: 30px;
`;

const SectionGroup = styled.div.attrs({
  className: "SectionGroup",
})`
  width: 200.66px;
  height: 30.38px;
  position: "relative";
  display: flex;
  flex-direction: row;
  padding: 23px;
  /* margin-left: 15px; */
`;

const SectionImage = styled.div.attrs({
  className: "SectionImage",
})`
  width: 28.4px;
  height: 29.61px;
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
  margin-left: 10px;
`;

const ProfileTitle = styled(SectionTitle).attrs({
  className: "ProfileTitle",
})`
  width: 100px;
  height: 50px;
  text-align: center;
  top: 50%;
  color: #4572a7;
  font-size: 21px;
  font-family: Inter;
  font-weight: 800;
  margin-bottom: 30px;
`;

const ProfileImage = styled(SectionImage).attrs({
  className: "ProfileImage",
})`
  max-width: 10%;
  margin-top: 10px;
`;

export default NavBar;
