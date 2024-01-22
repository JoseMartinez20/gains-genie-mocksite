import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore"; // Use getDoc for a single document
import OnboardingSectionContainer from "../components/onboarding/OnboardingSectionContainer";
import { Button } from "../sections/landingPage/HeroSection";

function OnboardingFlow() {
  const [hasOnboarded, setHasOnboarded] = useState(null);

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; // Total number of steps in the onboarding process

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  useEffect(() => {
    const checkIfUserHasOnboarded = async () => {
      if (auth.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        console.log(auth.currentUser.displayName);
        try {
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            setHasOnboarded(userDoc.data().hasOnboarded);
          } else {
            console.log("No such user!");
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    checkIfUserHasOnboarded();
  }, []);

  // Render loading state until hasOnboarded is determined
  if (hasOnboarded === null) {
    return <div>Loading...</div>;
  }

  if (hasOnboarded) {
    return (
      <div>
        <Dashboard />
      </div>
    );
  } else {
    return (
      <div>
        {currentStep === 1 && (
          <OnboardingSectionContainer
            title="What is your name?"
            text="Your name is used for social purposes"
            onClick={goToNextStep}
            buttonTitle="Continue"
          >
            <InputContainer>
              <input placeholder="First Name"></input>
              <input placeholder="Last Name"></input>
            </InputContainer>
          </OnboardingSectionContainer>
        )}

        {currentStep === 2 && (
          <OnboardingSectionContainer
            title="What are your measurements?"
            text="This is used to calculate different fitness metrics and is not shared with others by default"
            onClick={goToNextStep}
            buttonTitle="Continue"
          >
            <InputContainer>
              <input placeholder="Weight"></input>
              <input placeholder="Height"></input>
              <input placeholder="Age"></input>
              <input placeholder="Gender"></input>
            </InputContainer>
          </OnboardingSectionContainer>
        )}

        {currentStep === 3 && (
          <OnboardingSectionContainer
            title="What is your fitness community"
            text="This is used to calculate different fitness metrics and is not shared with others by default"
            onClick={goToNextStep}
            buttonTitle="Finish"
          >
            <InputContainer>
              <input placeholder="Gym used"></input>
              <input placeholder="City"></input>
            </InputContainer>
          </OnboardingSectionContainer>
        )}
      </div>
    );
  }
}

export default OnboardingFlow;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
