import React from "react";
import styled from "styled-components";
import Card from "../../components/landingPage/heroSection/Card";
import workoutTogether from "../../assets/workout-together.jpg";
import gymImage from "../../assets/gym.jpg.avif";
import foodImage from "../../assets/food.jpg";
import { TitleStyle } from "../../styles/texStyles";
function CardSection() {
  return (
    <div>
      <Title>
        Fitness <span>All In One</span>
      </Title>
      <CardGroup>
        <Card title="Personal Coach" text="Train Smarter" image={gymImage} />
        <Card
          title="Social"
          text="Workout With Friends"
          image={workoutTogether}
        />
        <Card title="Nutrition" text="Reach your goals" image={foodImage} />
      </CardGroup>
    </div>
  );
}

export default CardSection;

const Title = styled(TitleStyle).attrs({
  className: "Section Title",
})`
  margin: 50px 20px;
  text-align: center;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  span {
    background: linear-gradient(120deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
`;

const CardGroup = styled.div.attrs({
  className: "Card Group",
})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;

  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
