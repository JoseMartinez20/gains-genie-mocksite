import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import stockProfileImage from "../../../src/assets/stock-profile-image.png";

function FriendDisplay({ friends }) {
  const [hasProfilePicture, setHasProfilePicture] = useState(false);

  return (
    <div style={{ padding: "15px" }}>
      {friends.map((friend, index) => (
        <FriendRow key={index}>
          {friend.picture !== null && (
            <>
              <img src={friend.picture} alt="Profile" />
            </>
          )}
          {!friend.picture && (
            <>
              <img src={stockProfileImage} alt="Default Profile" />
            </>
          )}
          <Friend>{friend.name}</Friend>
          <UserName>{friend.username}</UserName>
        </FriendRow>
      ))}
    </div>
  );
}

const FriendRow = styled.div.attrs({
  className: "MetricDisplay",
})`
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  margin-left: 20%;
  padding: 15px;
`;

const Friend = styled.h3.attrs({
  className: "Friend",
})`
  width: 70px;
  height: 13px;
  color: black;
  font-size: 14px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;

const UserName = styled.p.attrs({
  className: "UserName",
})`
  width: 70px;
  height: 13px;
  color: #888888;
  font-size: 12px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;

export default FriendDisplay;
