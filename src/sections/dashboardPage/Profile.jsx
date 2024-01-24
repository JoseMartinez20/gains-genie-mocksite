import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ProfileButtonsSection from "./ProfileButtonsSection";
import ProfileInfo from "./ProfileInfo";
import { Box } from "../../styles/texStyles";

function Profile({ healthMetricsSets, friends, leaders }) {
  return (
    <BoxTopRight>
      <ProfileInfo />

      <ProfileButtonsSection
        healthMetricsSets={healthMetricsSets}
        friends={friends}
        leaders={leaders}
      />
    </BoxTopRight>
  );
}

export default Profile;

const BoxTopRight = styled.div.attrs({
  className: "BoxTopRight",
})`
  /* display: flex;
  flex-direction: column; */
  order: 1;
  /* top: 10%; */
  width: 453px;
  height: 470px;
  background-color: #ffffff;
  /* left: 60%;
  right: 10%; */
  border-radius: 30px;
`;
