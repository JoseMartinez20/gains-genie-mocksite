import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import lockImage from "../../../src/assets/locked-image.png";
import unlockImage from "../../../src/assets/unlocked-image.png";

function MetricDisplay({ healthMetrics }) {
  const [isLocked, setIsLocked] = useState(false);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div>
      {healthMetrics.map((healthMetric, index) => (
        <MetricRow key={index}>
          {" "}
          <MetricTitle>{healthMetric[0] + ":"}</MetricTitle>
          <p>{String(healthMetric[1])}</p>
        </MetricRow>
      ))}
    </div>
  );
}

const MetricRow = styled.div.attrs({
  className: "MetricDisplay",
})`
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  margin-left: 30%;
`;

const MetricTitle = styled.div.attrs({
  className: "MetricDisplay",
})`
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  margin-left: 20%;
  margin: 17px 20px 5px 10px;
  font-weight: bold;
`;

const ProfileButtonContainer = styled.div.attrs({
  className: "Profile Button Container",
})`
  flex-grow: 1;
  justify-content: center;
  display: flex;
`;

const ChangeButton = styled.div.attrs({
  className: "ChangeButton",
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

export default MetricDisplay;
