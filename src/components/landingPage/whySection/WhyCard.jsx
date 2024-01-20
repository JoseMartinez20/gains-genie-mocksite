import React from "react";
import styled from "styled-components";
import { NormalTextStyle, SubtitleStyle } from "../../../styles/texStyles";

function WhyCard({ title, description, image }) {
  return (
    <Container>
      <Image src={image} />
      <Title>{title}</Title>
      <Text>{description}</Text>
    </Container>
  );
}

export default WhyCard;

const Container = styled.div.attrs({
  className: "Container",
})`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 1em;
  background-color: var(--secondary);
  border-radius: 4%;
  cursor: pointer;
  transition: transform ease 0.2s;
  &:hover {
    transform: scale(103%);
  }
  @media (max-width: 960px) {
    width: 50%;
  }
`;

const Image = styled.img`
  z-index: 2;
  height: 30%;
  max-width: 80px;
  max-height: 80px;
`;

const Title = styled(SubtitleStyle).attrs({
  className: "Title",
})``;
const Text = styled(NormalTextStyle).attrs({
  className: "Text",
})``;
