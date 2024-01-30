import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { OverviewLargeText } from "../../../../styles/texStyles";

const cards = [
  {
    title: "Total Workouts",
    value: "4",
    misc: "# workouts",
  },
  {
    title: "Total Volume",
    value: "38.6k",
    misc: "lbs",
    color: "#F6E5E5",
  },
  {
    title: "Time in Gym",
    value: "2h 55m",
    misc: " total",
    color: "#E5ECF6",
  },
  {
    title: "Calorie Goal",
    value: "2800",
    misc: " kcals",
    color: "#E5F6EC",
  },
];

function TopSection() {
  return (
    <Container>
      <TitleContainer>
        <Title>Overview</Title>
      </TitleContainer>
      <CardsContainer>
        {cards.map((card, index) => (
          <Card
            title={card.title}
            value={card.value}
            misc={card.misc}
            color={card.color}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}
export default TopSection;

const Container = styled.div.attrs({
  className: "Top Section Container",
})`
  display: flex;
  flex-direction: column;
`;

const CardsContainer = styled.div.attrs({
  className: "Cards Container",
})`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`;

const TitleContainer = styled.div.attrs({
  className: "Title Container",
})`
  display: flex;
`;

const Title = styled(OverviewLargeText).attrs({
  className: " Title",
})`
  display: flex;
`;
