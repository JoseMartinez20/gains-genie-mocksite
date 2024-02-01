import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../config/firebase";
import { doc, setDoc, getDoc, collection, addDoc } from "firebase/firestore"; // Use getDoc for a single document
import OnboardingSectionContainer from "../components/onboarding/OnboardingSectionContainer";
import DashboardJose from "./newVersion/Dashboard-Jose";
import { Button } from "../sections/landingPage/HeroSection";

function OnboardingFlow() {
  const [hasOnboarded, setHasOnboarded] = useState(null);

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; // Total number of steps in the onboarding process

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  const [newAge, setNewAge] = useState(null);
  const [newWeight, setNewWeight] = useState(null);
  const [newHeight, setNewHeight] = useState(null);
  const [newGender, setNewGender] = useState();

  const [newCalorieGoal, setNewCalorieGoal] = useState(null);
  const [newProteinGoal, setNewProteinGoal] = useState(null);
  const [newCarbGoal, setNewCarbGoal] = useState(null);
  const [newFatGoal, setNewFatGoal] = useState(null);

  const [newBench, setNewBench] = useState(null);
  const [newSquat, setNewSquat] = useState(null);
  const [newDeadlift, setNewDeadlift] = useState(null);

  const [newGym, setNewGym] = useState("");
  const [newCity, setNewCity] = useState("");

  const isStep1Complete = () => {
    return newFirstName.trim() && newLastName.trim() && newUserName.trim();
  };

  const isStep2Complete = () => {
    return newWeight > 0 && newHeight > 0 && newAge > 0 && newGender;
  };

  const isStep3Complete = () => {
    return (
      newCalorieGoal > 0 &&
      newProteinGoal > 0 &&
      newCarbGoal > 0 &&
      newFatGoal > 0
    );
  };

  const isStep4Complete = () => {
    return newBench > 0 && newSquat > 0 && newDeadlift > 0;
  };

  const isStep5Complete = () => {
    return newGym.trim() && newCity.trim();
  };

  // Modify the goToNextStep function to check for field completion
  const goToNextStep = () => {
    let canProceed = false;

    switch (currentStep) {
      case 1:
        canProceed = isStep1Complete();
        break;
      case 2:
        canProceed = isStep2Complete();
        break;
      case 3:
        canProceed = isStep3Complete();
        break;
      case 4:
        canProceed = isStep4Complete();
        break;
      case 5:
        canProceed = isStep5Complete();
        break;
      default:
        canProceed = false;
    }

    if (!canProceed) {
      alert("Please complete all required fields.");
      return; // Stop the function if the check fails
    }

    // Increment step or finalize onboarding
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === totalSteps) {
      onSubmitUser(); // Finalize onboarding
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
    if (currentStep === 5 && !isStep5Complete()) {
      alert("Please fill out all the fields.");
      return; // Prevent going to the next step
    }

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
          calorieGoal: newCalorieGoal,
          proteinGoal: newProteinGoal,
          carbGoal: newCarbGoal,
          fatGoal: newFatGoal,
          benchPR: newBench,
          squatPR: newSquat,
          deadliftPR: newDeadlift,
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

    window.location.reload();
  };

  // Render loading state until hasOnboarded is determined
  if (hasOnboarded === null) {
    return <div>Loading...</div>;
  }

  if (hasOnboarded && auth.currentUser) {
    return (
      <div className="App">
        <DashboardJose />
      </div>
    );
  } else {
    return (
      <Container>
        {currentStep === 1 && (
          <OnboardingSectionContainer
            title="Please provide us with this registration info?"
            text=""
            onClick={goToNextStep}
            buttonTitle="Continue"
            disabled={!isStep1Complete()} // Disable the button if the step is not complete
          >
            <InputContainer>
              <StyledInput
                placeholder="First Name"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
              <StyledInput
                placeholder="Last Name"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
              <StyledInput
                placeholder="User Name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </InputContainer>
          </OnboardingSectionContainer>
        )}

        {currentStep === 2 && (
          <OnboardingSectionContainer
            title="What are your measurements?"
            text="This is used to calculate different fitness metrics and is not shared with others by default"
            onClick={goToNextStep}
            buttonTitle="Continue"
            disabled={!isStep2Complete()} // Disable the button if the step is not complete
          >
            <InputContainer>
              <StyledInput
                placeholder="Weight (lbs)"
                type="number"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
              ></StyledInput>
              <StyledInput
                placeholder="Height (cm)"
                type="number"
                value={newHeight}
                onChange={(e) => setNewHeight(e.target.value)}
              ></StyledInput>
              <StyledInput
                placeholder="Age"
                type="number"
                value={newAge}
                onChange={(e) => setNewAge(e.target.value)}
              ></StyledInput>

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
              <OnboardingButton onClick={goToPreviousStep}>
                Go Back
              </OnboardingButton>
            </InputContainer>
          </OnboardingSectionContainer>
        )}

        {currentStep === 3 && (
          <OnboardingSectionContainer
            title="More info"
            text="Tell us your nutrition goals"
            onClick={goToNextStep}
            buttonTitle="Continue"
            disabled={!isStep3Complete()} // Disable the button if the step is not complete
          >
            <InputContainer>
              <StyledInput
                placeholder="Calorie Goal"
                value={newCalorieGoal}
                onChange={(e) => setNewCalorieGoal(e.target.value)}
              ></StyledInput>
              <StyledInput
                placeholder="Protein Goal (g)"
                value={newProteinGoal}
                onChange={(e) => setNewProteinGoal(e.target.value)}
              ></StyledInput>
              <StyledInput
                placeholder="Carb Goal (g)"
                value={newCarbGoal}
                onChange={(e) => setNewCarbGoal(e.target.value)}
              ></StyledInput>
              <StyledInput
                placeholder="Fat Goal (g)"
                value={newFatGoal}
                onChange={(e) => setNewFatGoal(e.target.value)}
              ></StyledInput>
            </InputContainer>
            <OnboardingButton onClick={goToPreviousStep}>
              Go Back
            </OnboardingButton>
          </OnboardingSectionContainer>
        )}

        {currentStep === 4 && (
          <OnboardingSectionContainer
            title="More info"
            text="Tell us your PRs"
            onClick={goToNextStep}
            buttonTitle="Continue"
            disabled={!isStep4Complete()} // Disable the button if the step is not complete
          >
            <InputContainer>
              <StyledInput
                placeholder="Bench Press PR (lbs)"
                value={newBench}
                onChange={(e) => setNewBench(e.target.value)}
              ></StyledInput>
              <StyledInput
                placeholder="Squat PR (lbs)"
                value={newSquat}
                onChange={(e) => setNewSquat(e.target.value)}
              ></StyledInput>
              <StyledInput
                placeholder="Deadlift PR (lbs)"
                value={newDeadlift}
                onChange={(e) => setNewDeadlift(e.target.value)}
              ></StyledInput>
            </InputContainer>
            <OnboardingButton onClick={goToPreviousStep}>
              Go Back
            </OnboardingButton>
          </OnboardingSectionContainer>
        )}

        {currentStep === 5 && (
          <OnboardingSectionContainer
            title="What is your fitness community"
            text="This is used to calculate different fitness metrics and is not shared with others by default"
            onClick={onSubmitUser}
            buttonTitle="Finish"
            disabled={!isStep5Complete()} // Disable the button if the step is not complete
          >
            <InputContainer>
              <StyledInput
                placeholder="Gym"
                value={newGym}
                onChange={(e) => setNewGym(e.target.value)}
              ></StyledInput>
              <StyledInput
                placeholder="City"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
              ></StyledInput>
            </InputContainer>
            <OnboardingButton onClick={goToPreviousStep}>
              Go Back
            </OnboardingButton>
          </OnboardingSectionContainer>
        )}
      </Container>
    );
  }
}

export default OnboardingFlow;

const InputContainer = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid #ccc;
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 10px;
  outline: none;
`;

const OnboardingButton = styled(Button)`
  animation: none;
`;
