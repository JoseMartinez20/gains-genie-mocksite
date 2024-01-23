import React, { useEffect } from "react";
import styled from "styled-components";
import stockProfileImage from "../../assets/stock-profile-image.png";
import { Box } from "../../styles/texStyles";
import {
  TitleStyle,
  SubtitleStyle,
  NormalTextStyle,
} from "../../styles/postAuthStyles";
import { auth, db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore"; // Use getDoc for a single document
import ButtonsSection from "./ProfileButtonsSection";

function ProfileInfo() {
  return (
    <BoxTopRight>
      <div>
        <Ellipse>
          {" "}
          <img src={stockProfileImage}></img>{" "}
        </Ellipse>
      </div>
      <div>
        <Name> {auth.currentUser.displayName} </Name>
        <UserName>{auth.currentUser.email}</UserName>
      </div>
      {/* Add friends,followers, routines stats */}
      <Line />
      <ButtonsSection />
    </BoxTopRight>
  );
}
export default ProfileInfo;

const Ellipse = styled.div.attrs({
  className: "Ellipse",
})`
  width: 82.41px;
  height: 82.41px;
  left: 0px;
  top: 0;
  position: "relative";
  background-color: "#C5C4C4";
  border-radius: 9999px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
`;

const Name = styled(TitleStyle).attrs({
  className: "Name",
})`
  margin: 0 0 5px 0;
`;

const UserName = styled(SubtitleStyle).attrs({
  className: "UserName",
})`
  margin: 0 0 0 0;
`;

const BoxTopRight = styled(Box).attrs({
  className: "BoxTopRight",
})`
  width: 453px;
  height: 400px;
  background-color: #ffffff;
  left: 63%;
  right: 10%;
  top: 7%;
  border-radius: 30px;
`;

const Line = styled(Box).attrs({
  className: "Line",
})`
  height: 1px;
  width: 328px;
  background: rgba(136, 136, 136, 0.3);
  position: static;
  margin: 10px auto 10px auto;
`;
