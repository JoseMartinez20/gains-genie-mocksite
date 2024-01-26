import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import styled from "styled-components";
import { db, auth } from "../../config/firebase";

function UserWorkoutSessions() {
  const [workoutSessions, setWorkoutSessions] = useState([]);

  useEffect(() => {
    const fetchWorkoutSessions = async () => {
      const user = auth.currentUser;
      if (user) {
        console.log("Fetching workouts for user:", user.uid); // Log user ID
        const q = query(
          collection(db, "workoutSessions"),
          where("userId", "==", user.uid)
        );
        try {
          const querySnapshot = await getDocs(q);
          const sessions = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            console.log("Raw session data:", data); // Log raw data
            return {
              id: doc.id,
              ...data,
              date: data.date.toDate(), // Convert to JavaScript Date
            };
          });
          console.log("Processed sessions:", sessions); // Log processed data
          setWorkoutSessions(sessions);
        } catch (error) {
          console.error("Error fetching workout sessions:", error); // Log errors
        }
      } else {
        console.log("not user");
      }
    };

    fetchWorkoutSessions();
  }, []);

  return (
    <Container>
      <h2>Your Past Workouts</h2>
      {workoutSessions.map((session) => (
        <SessionCard key={session.id}>
          <h3>Workout Date: {session.date.toDateString()}</h3>
          <p>Duration: {formatDuration(session.duration)}</p>
          <h4>Exercises:</h4>
          <ul>
            {session.exercises.map((exercise, index) => (
              <li key={index}>
                <strong>{exercise.name}</strong>
                {exercise.sets.map((set) => (
                  <div key={set.setNumber}>
                    Set {set.setNumber}: Reps: {set.reps}, Weight: {set.weight}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </SessionCard>
      ))}
    </Container>
  );
}

export default UserWorkoutSessions;

const Container = styled.div`
  // Add styles for the container
  color: white;
`;

const SessionCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px 0;
  padding: 15px;
  // Additional styling for each session card
`;

function formatDuration(duration) {
  const minutes = Math.floor(duration / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds} minutes`;
}
