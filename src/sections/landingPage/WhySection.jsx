import React from "react";
import styled from "styled-components";
import WhyCard from "../../components/landingPage/whySection/WhyCard";
import image from "../../assets/g-dumbbell.svg";
import { TitleStyle } from "../../styles/texStyles";

function WhySection() {
  return (
    <SectionContainer>
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
    </SectionContainer>
  );
}
export default WhySection;

const SectionContainer = styled.div.attrs({
  className: "Section Container",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8em;
  margin: 3em 7%;
`;

const Container = styled.div.attrs({
  className: "Container",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
  color: white;
`;

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
  }
`;

const CardContainer = styled.div.attrs({
  className: "Card Container",
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3em;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }
`;
