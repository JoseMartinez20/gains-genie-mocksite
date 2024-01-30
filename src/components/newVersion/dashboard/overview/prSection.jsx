import React from "react";
import styled from "styled-components";
import {
  NewVersionText,
  OverviewSmallTitle,
} from "../../../../styles/texStyles";
import prIcon from "../../../../assets/trophy-icon.png";

const prs = [
  {
    name: "Bench Press",
    value: "215 lbs",
  },
  {
    name: "Back Squat",
    value: "255 lbs",
  },
  {
    name: "Deadlift",
    value: "285 lbs",
  },
];

function PrSection() {
  return (
    <Container>
      <Title>Personal Records</Title>
      {prs.map((pr, index) => (
        <ContentContainer>
          <Icon src={prIcon} />
          <Text>{pr.name}</Text>
          <Text>- {pr.value}</Text>
        </ContentContainer>
      ))}
      <Title>Misc</Title>
      <ContentContainer>
        <Icon src={prIcon} />
        <Text>Highest Streak - </Text>
        <Text>9</Text>
      </ContentContainer>
    </Container>
  );
}
export default PrSection;

const Container = styled.div.attrs({
  className: "PR Section Container",
})`
  display: flex;
  height: 330px;
  min-width: 200px;
  max-width: 272px;
  padding: var(--24, 24px);
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  border-radius: var(--16, 16px);
  background: var(--Primary-Light, #f7f9fb);
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
`;

const ContentContainer = styled.div.attrs({
  className: "Content Container",
})`
  display: flex;
  align-items: flex-start;
  gap: 0px 6px;
  flex: 1 1 1;
  align-self: stretch;
`;

const Text = styled(NewVersionText).attrs({
  className: "Text",
})``;

const Title = styled(OverviewSmallTitle).attrs({
  className: "Title",
})``;
const Icon = styled.img.attrs({
  className: "Icon",
})`
  width: 30px;
`;
