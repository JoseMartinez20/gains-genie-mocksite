import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Wave from "../homePage/Wave";
import gymImage from "../../assets/gym-background-blur.png";

function HeroSection() {
  return (
    <HeroContainer>
      <HeroGroup>
        <h1>Lift more.</h1>
        <h1>Lift together.</h1>
        <p>
          Gym Genie is the simplest, most intuitive workout tracking experience.
          Trusted by over 3 million users worldwide.
        </p>
        <Button>Get started</Button>
        <Wave />
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

const HeroContainer = styled.section.attrs({
  className: "Hero Container",
})`
  background: url(${gymImage});
  height: 820px;
  background-size: cover;
  background-position: center;
  position: relative;

  h1 {
    margin: 0;
    color: white;
    font-size: 96px;
    line-height: 1.2;
    opacity: 0;
    animation: ${HeroAnimation};
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  h2 {
    color: white;
    opacity: 0;
    animation: ${HeroAnimation};
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 30px;
    line-height: 1.5;
    animation: ${HeroAnimation} 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 40px;
    }

    p {
      font-size: 24px;
    }
  }
`;

const Button = styled.button`
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
  animation: ${HeroAnimation};
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: var(--primary);
    cursor: pointer;
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
