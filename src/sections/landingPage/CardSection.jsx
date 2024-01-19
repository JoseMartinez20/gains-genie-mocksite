import React from "react";
import styled from "styled-components";
import Card from "../../components/landingPage/heroSection/Card";
import workoutTogether from "../../assets/workout-together.jpg";
import gymImage from "../../assets/gym.jpg.avif";
import foodImage from "../../assets/food.jpg";
function CardSection() {
  return (
    <div>
      <Cards>
        <h2>
          Fitness All In <span>One</span>
        </h2>
        <CardGroup>
          <Card title="Personal Coach" text="Train Smarter" image={gymImage} />
          <Card
            title="Social"
            text="Workout Together"
            image={workoutTogether}
          />
          <Card title="Nutrition" text="Reach your goals" image={foodImage} />
        </CardGroup>
      </Cards>
    </div>
  );
}

export default CardSection;

const Cards = styled.div`
  h2 {
    margin: 50px 20px;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    background: white;
    /* background: linear-gradient(104deg, var(--primary) 0%, var(--accent) 100%); */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    background: linear-gradient(120deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const CardGroup = styled.div`
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
