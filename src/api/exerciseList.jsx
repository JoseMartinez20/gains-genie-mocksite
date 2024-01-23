import React, { useEffect, useState } from "react";
import { db } from "../config/firebase.js";
import { collection, getDocs } from "firebase/firestore";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      try {
        const exercisesCollectionRef = collection(db, "exercises");
        const querySnapshot = await getDocs(exercisesCollectionRef);
        const exercisesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setExercises(exercisesData);
      } catch (err) {
        console.error("Error fetching exercises:", err);
      }
      setLoading(false);
    };

    fetchExercises();
  }, []);

  if (loading) {
    return <div>Loading exercises...</div>;
  }

  return (
    <div>
      <h2>Exercise List</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <h3>{exercise.name}</h3>
            <p>Level: {exercise.level}</p>
            <p>Equipment: {exercise.equipment}</p>
            <p>Category: {exercise.category}</p>
            <p>Primary Muscles: {exercise.primaryMuscles.join(", ")}</p>
            <p>Instructions:</p>
            <ul>
              {exercise.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
