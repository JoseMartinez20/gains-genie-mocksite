import React, { useState, useEffect } from "react";
import { db, auth } from "../config/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import styled from "styled-components";
import SavedWorkoutCell from "../components/workout/savedWorkoutCell";
import WorkoutCell from "../components/workout/workoutCell";
import { Button } from "../sections/landingPage/HeroSection";

function Workout() {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [exerciseLogs, setExerciseLogs] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchWorkouts = async () => {
      const user = auth.currentUser;
      if (user) {
        const q = query(
          collection(db, "workouts"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        setWorkouts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setCheckingStatus(false);
      }
    };

    fetchWorkouts();
  }, []);

  function formatDuration(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours > 0 ? `${hours}:` : ""} ${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  useEffect(() => {
    // Start the timer if startTime is set
    if (startTime) {
      const interval = setInterval(() => {
        setElapsedTime(new Date() - startTime);
      }, 1000); // Update every second

      // Save the interval ID so it can be cleared later
      setTimerInterval(interval);
    }

    // Cleanup function to clear the interval when the component unmounts or startTime changes
    return () => {
      clearInterval(timerInterval);
    };
  }, [startTime]);

  const handleWorkoutSelect = (workout) => {
    setSelectedWorkout(workout);
    setExerciseLogs(
      workout.exercises.map(() => ({
        details: [{ reps: "", sets: "", weight: "" }],
      }))
    );
    setStartTime(new Date());
  };

  const handleDetailAdd = (exerciseIndex) => {
    const updatedLogs = [...exerciseLogs];
    updatedLogs[exerciseIndex].details.push({ reps: "", sets: "", weight: "" });
    setExerciseLogs(updatedLogs);
  };

  const handleDeleteSet = (exerciseIndex, setIndex) => {
    const updatedLogs = [...exerciseLogs];
    updatedLogs[exerciseIndex].details.splice(setIndex, 1); // Remove the set at setIndex
    setExerciseLogs(updatedLogs);
  };

  const handleDetailChange = (exerciseIndex, detailIndex, field, value) => {
    const updatedLogs = [...exerciseLogs];
    updatedLogs[exerciseIndex].details[detailIndex][field] = Number(value);
    setExerciseLogs(updatedLogs);
  };

  const isCurrentExerciseComplete = () => {
    const currentLogs = exerciseLogs[currentExerciseIndex].details;
    return currentLogs.every((log) => log.reps !== "" && log.reps !== 0);
  };

  //   const handleExerciseLogChange = (index, field, value) => {
  //     const updatedLogs = [...exerciseLogs];
  //     updatedLogs[index][field] = value;
  //     setExerciseLogs(updatedLogs);
  //   };

  const saveWorkoutSession = async () => {
    const duration = new Date() - startTime;

    const workoutSession = {
      workoutId: selectedWorkout.id,
      userId: user.uid,
      date: new Date(),
      duration,
      exercises: selectedWorkout.exercises.map((exercise, index) => ({
        name: exercise.name,
        sets: exerciseLogs[index].details.map((log, setIndex) => ({
          setNumber: setIndex + 1, // Add set number
          reps: log.reps,
          weight: log.weight,
        })),
      })),
    };

    await addDoc(collection(db, "workoutSessions"), workoutSession);
    clearInterval(timerInterval); // Clear the timer interval
    setTimerInterval(null); // Reset timerInterval state
    setElapsedTime(0); // Reset elapsed time
    setStartTime(null); // Reset start time
    window.location.reload();
  };

  if (checkingStatus) {
    return <div>Loading...</div>; // Or some loading indicator
  }

  if (!selectedWorkout) {
    return (
      <Container>
        <SecondaryContainer>
          <h2>Select a Workout</h2>

          {workouts.map((workout) => (
            <SavedWorkoutCell
              key={workout.id}
              workout={workout}
              onClick={() => handleWorkoutSelect(workout)}
            />
          ))}
        </SecondaryContainer>
      </Container>
    );
  }

  const currentExercise = selectedWorkout.exercises[currentExerciseIndex];
  const currentExerciseLogs = exerciseLogs[currentExerciseIndex]?.details || [];

  return (
    <Container>
      <TimerDisplay>Time Elapsed: {formatDuration(elapsedTime)}</TimerDisplay>

      <h2>{currentExercise.name}</h2>

      <WorkoutContainer>
        {currentExerciseLogs.map((log, detailIndex) => (
          <div key={detailIndex}>
            <div>
              <label>Reps </label>
              <input
                type="number"
                value={log.reps}
                onChange={(e) =>
                  handleDetailChange(
                    currentExerciseIndex,
                    detailIndex,
                    "reps",
                    e.target.value
                  )
                }
              />
              <label>Weight </label>
              <input
                type="number"
                value={log.weight}
                onChange={(e) =>
                  handleDetailChange(
                    currentExerciseIndex,
                    detailIndex,
                    "weight",
                    e.target.value
                  )
                }
              />
              <button
                onClick={() =>
                  handleDeleteSet(currentExerciseIndex, detailIndex)
                }
              >
                Delete Set
              </button>
            </div>
          </div>
        ))}
      </WorkoutContainer>

      <LogOutButton onClick={() => handleDetailAdd(currentExerciseIndex)}>
        Add Set
      </LogOutButton>
      <LogOutButton
        onClick={() => {
          if (currentExerciseIndex != 0) {
            setCurrentExerciseIndex(currentExerciseIndex - 1);
          } else {
            alert("This is the first set!");
          }
        }}
      >
        Back
      </LogOutButton>
      {currentExerciseIndex < selectedWorkout.exercises.length - 1 ? (
        <LogOutButton
          onClick={() => {
            if (isCurrentExerciseComplete()) {
              setCurrentExerciseIndex(currentExerciseIndex + 1);
            } else {
              alert(
                "Please complete all sets with non-zero reps before continuing."
              );
            }
          }}
          disabled={
            currentExerciseIndex >= selectedWorkout.exercises.length - 1
          }
        >
          Next
        </LogOutButton>
      ) : (
        <LogOutButton onClick={saveWorkoutSession}>
          Save Workout Session
        </LogOutButton>
      )}
    </Container>
  );
}

export default Workout;

const Container = styled.div.attrs({
  className: "Workout Container",
})`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const SecondaryContainer = styled.div.attrs({
  className: "Secondary Container",
})`
  display: flex;
  flex-direction: column;
`;

const WorkoutContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    cursor: pointer; // Indicates it's clickable
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
    /* background-color: #e0e0e0; */
  }
`;

const TimerDisplay = styled.div`
  font-size: 1.5em;
  margin: 10px 0;
  // Add more styles as needed
`;

const LogOutButton = styled(Button)`
  animation: none;
`;
