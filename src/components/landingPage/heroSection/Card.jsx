import React from "react";
import styled from "styled-components";
import { NormalTextStyle, SubtitleStyle } from "../../../styles/texStyles";

const Card = (props) => (
  <CardContainer>
    <img src={props.image} />
    <Title>{props.title}</Title>
    <Text>{props.text}</Text>
  </CardContainer>
);

export default Card;

const CardContainer = styled.div.attrs({
  className: "Card Container",
})`
  width: 300px;
  height: 225px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    img {
      transform: translateY(-20px);
      filter: blur(0px);
    }
  }

  img {
    position: absolute;
    top: 0;
    height: 110%;
    z-index: 1;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    filter: blur(2px);
  }
`;

const Title = styled(SubtitleStyle).attrs({
  className: "Card Title",
})`
  margin: 20px 0px 0px 20px;
  width: 220px;
  z-index: 2;
`;

const Text = styled(NormalTextStyle).attrs({
  className: "Card Text",
})`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  align-self: end;
  margin: 0 0 20px 20px;
  z-index: 3;
`;
