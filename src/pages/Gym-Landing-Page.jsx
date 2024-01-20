import React from "react";
import HeroSection from "../sections/landingPage/HeroSection.jsx";
import Section from "../components/homePage/Section.jsx";
import gymImage from "../assets/gym-background-blur.png";
import logoImage from "../assets/logo-react.png";
import CardSection from "../sections/landingPage/CardSection.jsx";
import WhySection from "../sections/landingPage/WhySection.jsx";
import JoinSection from "../sections/JoinSection.jsx";

function GymLandingPage() {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <WhySection />
      <JoinSection />
      <Section
        image={gymImage}
        logo={logoImage}
        title="Contact Us"
        text={"Here I will put contact info"}
      />
    </div>
  );
}

export default GymLandingPage;
