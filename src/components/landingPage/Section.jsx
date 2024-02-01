import React from "react";
import Wave from "./Wave.jsx";
import styled from "styled-components";
import { NormalTextStyle, TitleStyle } from "../../styles/texStyles.js";

const Section = (props) => (
  <SectionContainer style={{ backgroundImage: `url(${props.image})` }}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <SectionTitleGroup>
      <Title>{props.title}</Title>
      <SectionText>
        {props.text1}
        <br />
        {props.text2}
        <br />
        {props.text3}
      </SectionText>
    </SectionTitleGroup>
  </SectionContainer>
);

export default Section;

const SectionContainer = styled.div.attrs({
  className: "Section Container",
})`
  margin: 100px 0 0;
  background-size: cover;
  height: 720px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 0px;
  position: relative;
`;

const WaveTop = styled.div.attrs({
  className: "Top Wave Container",
})`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`;

const WaveBottom = styled.div.attrs({
  className: "Bottom Wave Container",
})`
  position: absolute;
  width: 100%;
  bottom: -6px;
`;

const SectionTitleGroup = styled.div.attrs({
  className: "Section Title Group",
})`
  max-width: 800px;
  margin: -140px 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto 100%;
  align-self: end;
`;

const Title = styled(TitleStyle).attrs({
  className: "Section Title",
})``;

const SectionText = styled(NormalTextStyle)``;
