import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NormalTextStyle } from "../../styles/postAuthStyles";
import MetricDisplay from "./MetricDisplay";
import FriendDisplay from "./FriendDisplay";
import LeaderDisplay from "./LeaderDisplay";
//import buttons here

function ProfileButtonsSection({ healthMetricsSets, friends, leaders }) {
  const [selectedToggle, setSelectedToggle] = useState("profile");

  const handleOptionChange = (option) => {
    setSelectedToggle(option);
  };

  return (
    <div>
      <ProfileAllButtonsGroup>
        <ProfileButtonContainer>
          <Button onClick={() => handleOptionChange("profile")}>
            {" "}
            Information
          </Button>
        </ProfileButtonContainer>
        <ProfileButtonContainer>
          <Button onClick={() => handleOptionChange("friends")}>
            Friends
            </Button>
        </ProfileButtonContainer>
        <ProfileButtonContainer>
          <Button onClick={() => handleOptionChange("leaders")}>
            Leaderboard
          </Button>
        </ProfileButtonContainer>
      </ProfileAllButtonsGroup>

      {selectedToggle === "profile" && (
       <MetricDisplay healthMetrics={healthMetricsSets} />
      )}
      {selectedToggle === "friends" && ( 
      <FriendDisplay friends={friends} />
      )}
      {selectedToggle === "leaders" && (
      <LeaderDisplay leaders={leaders} />
      )}
    </div>
  );
}

export default ProfileButtonsSection;

export const Button = styled.button.attrs({
  className: "Profile Button",
})`
  font-size: 17px;
  //text-decoration:
  width: 110px;
  height: 34px;
  background: rgba(217, 217, 217, 0.45);
  color: black;
  //padding: 9px 20px;
  //border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  //transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  //margin: 10px 100px;
  display: grid;
`;

const ProfileAllButtonsGroup = styled.div.attrs({
  className: "Profile Buttons Group",
})`
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  //align-items: center;
  //margin: 15px 0px 0px 54px;
  //width: 347px;
  height: 34px;
`;

const ProfileButtonContainer = styled.div.attrs({
  className: "Profile Button Container",
})`
  flex-grow: 1;
  justify-content: center;
  display: flex;
`;

const Text = styled(NormalTextStyle).attrs({
  className: "Text",
})`
  //margin: 0 0 0 0;
`;
