import React, { useEffect, useState } from "react";
import HeroSection from "../sections/landingPage/HeroSection.jsx";
import Section from "../components/landingPage/Section.jsx";
import gymImage from "../assets/gym-background-blur.png";
import logoImage from "../assets/logo-react.png";
import CardSection from "../sections/landingPage/CardSection.jsx";
import WhySection from "../sections/landingPage/WhySection.jsx";
import JoinSection from "../sections/landingPage/JoinSection.jsx";
import { auth } from "../config/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import Header from "../components/header.jsx";
import OnboardingFlow from "./OnboardingFlow.jsx";
import Dashboard from "./Dashboard.jsx";

function GymLandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  if (isLoggedIn) {
    return (
      <div>
        <OnboardingFlow />
        {/* <Dashboard /> */}
      </div>
    );
  } else {
    return (
      <div>
        <Header />
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
}

export default GymLandingPage;
