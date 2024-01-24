import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import Nutrition from "./Nutrition";
import { Routes, Route } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { doc, setDoc, getDoc, collection, addDoc } from "firebase/firestore"; // Use getDoc for a single document
import OnboardingSectionContainer from "../components/onboarding/OnboardingSectionContainer";
import RoutinesPage from "./All-Routines-Page";

function OnboardingFlow() {
  const [hasOnboarded, setHasOnboarded] = useState(null);

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; // Total number of steps in the onboarding process

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newWeight, setNewWeight] = useState(0);
  const [newHeight, setNewHeight] = useState(0);
  const [newGender, setNewGender] = useState();
  const [newGym, setNewGym] = useState("");
  const [newCity, setNewCity] = useState("");

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
            setHasOnboarded(userDoc.data().onboardingComplete);
          } else {
            // console.log("No such user!");
            setHasOnboarded(false);
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    checkIfUserHasOnboarded();
  }, []);

  const onSubmitUser = async () => {
    setHasOnboarded(true);

    const user = auth.currentUser;
    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
          firstName: newFirstName,
          lastName: newLastName,
          userName: newUserName,
          age: newAge, // Added age
          weight: newWeight, // Added weight
          height: newHeight, // Added height
          gender: newGender, // Added gender
          gym: newGym, // Added gender
          city: newCity, // Added gender
          onboardingComplete: true, // Added gender
        });

        // Handle successful submission
      } catch (err) {
        console.error(err);
        // Handle errors
      }
    } else {
      // Handle no signed-in user
    }
  };

  // Render loading state until hasOnboarded is determined
  if (hasOnboarded === null) {
    return <div>Loading...</div>;
  }

  if (hasOnboarded) {
    return (
      <div className="App">
        <Dashboard/>
      </div>
    );
  } else {
    return (
      <div>
        {currentStep === 1 && (
          <OnboardingSectionContainer
            title="Please provide us with this registration info?"
            text="Your name is used for social purposes"
            onClick={goToNextStep}
            buttonTitle="Continue"
          >
            <InputContainer>
              <input
                placeholder="First Name"
                onChange={(e) => setNewFirstName(e.target.value)}
              ></input>
              <input
                placeholder="Last Name"
                onChange={(e) => setNewLastName(e.target.value)}
              ></input>
              <input
                placeholder="User Name"
                onChange={(e) => setNewUserName(e.target.value)}
              ></input>
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
              <input
                placeholder="Weight"
                type="number"
                onChange={(e) => setNewWeight(e.target.value)}
              ></input>
              <input
                placeholder="Height"
                type="number"
                onChange={(e) => setNewHeight(e.target.value)}
              ></input>
              <input
                placeholder="Age"
                type="number"
                onChange={(e) => setNewAge(e.target.value)}
              ></input>

              <form>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => setNewGender(e.target.value)}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => setNewGender(e.target.value)}
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={(e) => setNewGender(e.target.value)}
                />
                <label htmlFor="other">Other</label>
              </form>
            </InputContainer>
          </OnboardingSectionContainer>
        )}

        {currentStep === 3 && (
          <OnboardingSectionContainer
            title="What is your fitness community"
            text="This is used to calculate different fitness metrics and is not shared with others by default"
            onClick={onSubmitUser}
            buttonTitle="Finish"
          >
            <InputContainer>
              <input
                placeholder="Gym"
                onChange={(e) => setNewGym(e.target.value)}
              ></input>
              <input
                placeholder="City"
                onChange={(e) => setNewCity(e.target.value)}
              ></input>
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
  color: white;
  flex-direction: column;
  gap: 5px;
`;
