import React from "react";
import Wave from "./Wave.jsx";
import styled from "styled-components";

const Section = (props) => (
  <SectionContainer style={{ backgroundImage: `url(${props.image})` }}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionContainer>
);

export default Section;

const SectionContainer = styled.div`
  margin: 100px 0 0;
  background-size: cover;
  height: 720px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 0px;
  position: relative;
`;

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`;

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`;

const SectionTitleGroup = styled.div`
  max-width: 800px;
  margin: -140px 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto 100%;
  align-self: end;
`;

const SectionTitle = styled.h1`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
`;

const SectionText = styled.p`
  color: white;
`;
