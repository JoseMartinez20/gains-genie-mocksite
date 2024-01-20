import React from "react";
import styled from "styled-components";
import { TitleStyle, SmallTitle } from "../styles/texStyles";
import { Button } from "./landingPage/HeroSection";

function JoinSection() {
  return (
    <Container>
      <Title>
        Join The <span>Community</span>
      </Title>
      <Text>Thousands of gym goers have already joined Gym Genie</Text>
      <Button> Get started</Button>
    </Container>
  );
}
export default JoinSection;

const Container = styled.div.attrs({
  className: "Section Container",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(TitleStyle).attrs({
  className: "Section Title",
})`
  margin: 50px 20px 0px;
  text-align: center;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  span {
    background: linear-gradient(120deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Text = styled(SmallTitle).attrs({
  className: "Text",
})`
  text-align: center;
`;
