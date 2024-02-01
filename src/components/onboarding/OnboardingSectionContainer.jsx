import React from "react";
import styled from "styled-components";
import { NormalTextStyle, SmallTitle } from "../../styles/texStyles";
import { Button } from "../../sections/landingPage/HeroSection";

function OnboardingSectionContainer({
  title,
  text,
  children,
  buttonTitle,
  onClick,
}) {
  return (
    <ContainerWrapper>
      {title && <Title>{title}</Title>}
      {text && <Text>{text}</Text>}
      {children}
      <OnboardingButton onClick={onClick}>{buttonTitle}</OnboardingButton>
    </ContainerWrapper>
  );
}

export default OnboardingSectionContainer;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  // Add more styling as needed
`;

const Title = styled(SmallTitle)`
  // Styling for the title
`;

const Text = styled(NormalTextStyle)`
  // Styling for the text
  font-weight: 800;
`;

const OnboardingButton = styled(Button)`
  animation: none;
`;
