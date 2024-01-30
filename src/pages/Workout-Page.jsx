import React, { useState, useEffect } from "react";
import { db, auth } from "../config/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import styled from "styled-components";
function Workout() {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [exerciseLogs, setExerciseLogs] = useState([]);
  const [startTime, setStartTime] = useState(null);

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
      }
    };

    fetchWorkouts();
  }, []);

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

  const handleDetailChange = (exerciseIndex, detailIndex, field, value) => {
    const updatedLogs = [...exerciseLogs];
    updatedLogs[exerciseIndex].details[detailIndex][field] = Number(value);
    setExerciseLogs(updatedLogs);
  };

  const isCurrentExerciseComplete = () => {
    const currentLogs = exerciseLogs[currentExerciseIndex].details;
    return currentLogs.every((log) => log.reps !== "" && log.reps !== 0);
  };

  const handleDeleteSet = (exerciseIndex, setIndex) => {
    const updatedLogs = [...exerciseLogs];
    updatedLogs[exerciseIndex].details.splice(setIndex, 1); // Remove the set at setIndex
    setExerciseLogs(updatedLogs);
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
  };

  if (!selectedWorkout) {
    return (
      <Container>
        <h2>Select a Workout</h2>
        {workouts.map((workout) => (
          <div key={workout.id} onClick={() => handleWorkoutSelect(workout)}>
            {workout.name || `Workout on ${workout.createdAt.toDateString()}`}
          </div>
        ))}
      </Container>
    );
  }

  const currentExercise = selectedWorkout.exercises[currentExerciseIndex];
  const currentExerciseLogs = exerciseLogs[currentExerciseIndex]?.details || [];

  return (
    <Container>
      <h2>{currentExercise.name}</h2>
      {currentExerciseLogs.map((log, detailIndex) => (
        <div key={detailIndex}>
          <div>
            <label>Reps</label>
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
            <label>Weight</label>
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
              onClick={() => handleDeleteSet(currentExerciseIndex, detailIndex)}
            >
              Delete Set
            </button>
          </div>
        </div>
      ))}

      <button onClick={() => handleDetailAdd(currentExerciseIndex)}>
        Add Set
      </button>
      {currentExerciseIndex < selectedWorkout.exercises.length - 1 ? (
        <button
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
        </button>
      ) : (
        <button onClick={saveWorkoutSession}>Save Workout Session</button>
      )}
    </Container>
  );
}

export default Workout;

const Container = styled.div`
  color: black;
`;
