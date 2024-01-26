import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ChartComponent from "./ChartComponent";
import { Box } from "../../styles/texStyles";

function Charts({ chartDataSets }) {
  return (
    <BoxMiddle>
      {chartDataSets.map((chartData) => (
        <ChartComponent key={chartData.id} dataset={chartData} />
      ))}
    </BoxMiddle>
  );
}

export default Charts;

const BoxMiddle = styled.div.attrs({
  className: "BoxMiddle",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-right: 50%; */
  width: 2000px;
  height: 1000px;
  width: 50%;
  background-color: #ffffff;
  border-radius: 30px;
`;
