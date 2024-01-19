import React from "react";
import HeroSection from "../sections/landingPage/HeroSection.jsx";
import Section from "../components/homePage/Section.jsx";
import gymImage from "../assets/gym-background-blur.png";
import logoImage from "../assets/logo-react.png";
import CardSection from "../sections/landingPage/CardSection.jsx";
import styled from "styled-components";
import WhySection from "../sections/landingPage/WhySection.jsx";
import JoinSection from "../sections/JoinSection.jsx";

function GymLandingPage() {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <ContentContainer>
        <WhySection />
      </ContentContainer>
      <JoinSection />
      <Section
        image={gymImage}
        logo={logoImage}
        title="Contact Us"
        text={<p>Here I will put contact info</p>}
      />
    </div>
  );
}

export default GymLandingPage;

const ContentContainer = styled.div.attrs({
  className: "Main Content",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8em;
  margin: 3em 7%;
`;
