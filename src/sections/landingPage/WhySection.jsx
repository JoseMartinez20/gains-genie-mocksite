import React from "react";
import styled from "styled-components";
import WhyCard from "../../components/landingPage/whySection/WhyCard";
import { H2 } from "../../styles/texStyles";
import image from "../../assets/g-dumbbell.svg";

function WhySection() {
  return (
    <Container>
      <Title>
        Why <span>Gym Genie</span>?
      </Title>
      <CardContainer>
        <WhyCard
          title="Personalized Fitness"
          description="Get AI-driven workout recommendations customized to your fitness level and goals, ensuring each session maximizes your progress."
          image={image}
        />

        <WhyCard
          title="Nutrition"
          description="Log meals, track macros, and manage your diet with our easy-to-use nutrition tracker, designed to complement your fitness regime."
          image={image}
        />

        <WhyCard
          title="Community"
          description="Work out with friends, share progress, and stay motivated together. Transform your fitness into a shared, enjoyable journey."
          image={image}
        />
      </CardContainer>
    </Container>
  );
}
export default WhySection;

const Container = styled.div.attrs({
  className: "Section Container",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Title = styled.h2`
  margin: 50px 20px;
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  background: white;
  /* background: linear-gradient(104deg, var(--primary) 0%, var(--accent) 100%); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  span {
    background: linear-gradient(120deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 3em;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 2em;
  }
`;
