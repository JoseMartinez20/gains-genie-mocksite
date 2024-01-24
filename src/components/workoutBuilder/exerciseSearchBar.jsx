import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SmallTitle } from "../../styles/texStyles";
import { db, auth } from "../../config/firebase";
import {
  collection,
  query,
  orderBy,
  startAt,
  endAt,
  getDocs,
  addDoc,
} from "firebase/firestore";
import ResultCell from "./resultCell";

function ExerciseSearchBar() {
  const [name, setName] = useState("");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [workout, setWorkout] = useState([]);
  const [workoutName, setWorkoutName] = useState("");

  const addExerciseToWorkout = (exercise) => {
    setWorkout([...workout, exercise]);
  };

  const saveWorkout = async () => {
    // Ensure there is a logged-in user
    const user = auth.currentUser;
    if (user) {
      const workoutRef = collection(db, "workouts");
      try {
        await addDoc(workoutRef, {
          userId: user.uid, // Include the user's ID
          name: workoutName,
          exercises: workout,
          createdAt: new Date(),
        });
        console.log("Workout saved successfully");
        setWorkout([]); // Reset workout after saving
      } catch (err) {
        console.error("Error saving workout:", err);
      }
    } else {
      console.log("No user logged in");
    }
  };

  useEffect(() => {
    const fetchExercises = async () => {
      if (name) {
        const lowerCaseName = name.toLowerCase();
        const exercisesRef = collection(db, "exercises");
        const q = query(
          exercisesRef,
          orderBy("nameLowercase"),
          startAt(lowerCaseName),
          endAt(lowerCaseName + "\uf8ff")
        );

        const querySnapshot = await getDocs(q);
        setExercises(querySnapshot.docs.map((doc) => doc.data()));
        setShowAdditionalFields(true);
      } else {
        setExercises([]);
        setShowAdditionalFields(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchExercises();
    }, 100);

    return () => clearTimeout(delayDebounceFn);
  }, [name]);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // You can add any additional logic you want to execute on form submission here
  };

  return (
    // <div>
    <Container>
      <FormContainer>
        <HeroTitle>Search Exercises</HeroTitle>

        <form onSubmit={handleFormSubmit}>
          <StyledInput
            type="text"
            placeholder="Exercise Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <SlideDownAnimation className={showAdditionalFields ? "visible" : ""}>
            {showAdditionalFields && (
              <div>
                <h1>Exercise Results</h1>
                {exercises.map((exercise, index) => (
                  <ResultCell
                    key={index}
                    exercise={exercise}
                    onSelectExercise={addExerciseToWorkout}
                  />
                ))}
              </div>
            )}
          </SlideDownAnimation>
        </form>
      </FormContainer>

      <SaveWorkoutContainer>
        {workout.map((exercise, index) => (
          <div key={index}>{exercise.name} - Added to workout</div>
        ))}
        {workout.length > 0 && (
          <SaveWorkoutContainer>
            <input
              placeholder="Workout Name"
              onChange={(e) => setWorkoutName(e.target.value)}
            ></input>
            <button onClick={saveWorkout}>Save Workout</button>
          </SaveWorkoutContainer>
        )}
      </SaveWorkoutContainer>
    </Container>
    // </div>
  );
}

export default ExerciseSearchBar;

// ... (Styled components remain the same)

const Container = styled.div.attrs({
  className: "Main Container",
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 70px 20px;
  padding-top: 160px;
  text-align: center;
  width: 100%;
  color: white;
  @media (max-width: 480px) {
    padding-top: 120px;
  }
`;

const SlideDownAnimation = styled.div`
  transform: translateY(-20px);
  opacity: 0;
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }
`;
const HeroTitle = styled(SmallTitle)``;

const FormContainer = styled.div.attrs({
  className: "Form Container",
})`
  position: relative;
  max-width: 610px;
  margin: 20px auto;
  @media (max-width: 480px) {
    padding: 0px 0px;
  }
`;

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid #ccc;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 10px;
  outline: none;

  &:focus {
    border: 1px solid #666;
  }

  ::placeholder {
    color: #aaa;
  }
`;

const SaveWorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: auto;

  width: 1;
  gap: 10px;
`;
