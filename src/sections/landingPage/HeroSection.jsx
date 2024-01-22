import React from "react";
import styled, { keyframes } from "styled-components";
import { LargeTextStyle, LargeTitleStyle } from "../../styles/texStyles";
import Wave from "../../components/landingPage/Wave";
import gymImage from "../../assets/gym-background-blur.png";
import Auth from "../../components/auth/auth";

function HeroSection() {
  return (
    <HeroContainer>
      <HeroGroup>
        <Title>
          Gym Genie
          <br />
          Lift together.
        </Title>
        <Text>
          Gym Genie is the simplest, most intuitive workout tracking experience.
          Trusted by over 3 million users worldwide.
        </Text>
        <Auth />
        {/* <Wave /> */}
      </HeroGroup>
    </HeroContainer>
  );
}

export default HeroSection;

const HeroAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const HeroContainer = styled.div.attrs({
  className: "Hero Container",
})`
  background: url(${gymImage});
  height: 820px;
  background-size: cover;
  background-position: center;
  position: relative;

  svg {
    position: absolute;
    bottom: 0;
  }
`;

const HeroGroup = styled.div.attrs({
  className: "Hero Group",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 700px;
  padding: 150px 50px;
  text-align: center;
`;

const Title = styled(LargeTitleStyle).attrs({
  className: "Hero Title",
})`
  margin: 0;
  animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const Text = styled(LargeTextStyle).attrs({
  className: "Hero Text",
})`
  color: rgba(255, 255, 255, 0.8);
  animation: ${HeroAnimation} 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
`;

export const Button = styled.button.attrs({
  className: "CTA Button",
})`
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  width: 300px;

  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 9px 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  margin: 10px 100px;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: var(--primary);
    cursor: pointer;
  }
`;
