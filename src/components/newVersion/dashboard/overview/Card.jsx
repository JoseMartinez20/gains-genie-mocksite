import React from "react";
import styled from "styled-components";
import {
  NewVersionText,
  OverviewLargeText,
  OverviewSmallTitle,
} from "../../../../styles/texStyles";

function Card({ title, value, misc, color }) {
  return (
    <Container color={color}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer>
        <Value>{value}</Value>
        <MiscDetails>{misc}</MiscDetails>
      </ContentContainer>
    </Container>
  );
}
export default Card;

const Container = styled.div.attrs({
  className: "Top Section Container",
})`
  display: flex;
  min-width: 200px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 16px;
  background: ${(props) => props.color || "#e3f5ff"};
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
`;

const TitleContainer = styled.div.attrs({
  className: "Title Container",
})`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 8px 8px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const Title = styled(OverviewSmallTitle).attrs({
  className: "Title",
})``;

const ContentContainer = styled.div.attrs({
  className: "Content Container",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  row-gap: 8px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const Value = styled(OverviewLargeText).attrs({
  className: "Value",
})``;

const MiscDetails = styled(NewVersionText).attrs({
  className: "Misc",
})``;
