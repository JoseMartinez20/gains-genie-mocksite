import React from "react";
import styled from "styled-components";
import TopSection from "./topSection";
import ChartSection from "./chartSection";
import PrSection from "./prSection";
import MacrosProgress from "./macrosChart";

function Overview() {
  return (
    <Container>
      <TopSection />
      <MiddleSectionContainer>
        <ChartSection />
        <PrSection />
      </MiddleSectionContainer>
      <MacrosProgress />
    </Container>
  );
}
export default Overview;

const Container = styled.div.attrs({
  className: "Overview Container",
})`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-content: flex-start;
  gap: 28px;
  flex-wrap: wrap;
`;

const MiddleSectionContainer = styled.div.attrs({
  className: "Middle Secion Container",
})`
  display: flex;
  align-items: flex-start;
  gap: 28px;
  flex-wrap: wrap;
`;
