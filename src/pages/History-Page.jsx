import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import styled from "styled-components";
import { LargeTitleStyle, TitleStyle } from "../styles/postAuthStyles";
import MealHistorySection from "../sections/historyPage/MealHistorySection";
import WorkoutHistorySection from "../sections/historyPage/WorkoutHistorySection";

function HistoryPage() {
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
    <FlexBoxAndRow>
      <HistoryDayContainer>
        <Title>Workout History</Title>
        {workoutSessions.map((session) => (
          <SessionCard key={session.id}>
            <h3>Date: {session.date.toDateString()}</h3>
            <p>Duration: {formatDuration(session.duration)}</p>
            <h4>Exercises:</h4>
            <ul>
              {session.exercises.map((exercise, index) => (
                <li key={index}>
                  <strong>{exercise.name}</strong>
                  {exercise.sets.map((set) => (
                    <div key={set.setNumber}>
                      Set {set.setNumber}: Reps: {set.reps}, Weight:{" "}
                      {set.weight}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </SessionCard>
        ))}
      </HistoryDayContainer>
    </FlexBoxAndRow>
  );
}
export default HistoryPage;

const FlexBoxAndRow = styled.div.attrs({
  className: "FlexBoxAndRow",
})`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vh; */
`;
const HistoryDayContainer = styled.div.attrs({
  className: "History Day Container",
})`
  background-color: white;
  position: relative;
  left: 25%;
  color: black;
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  padding-top: 10px;
  gap: 7px;
  align-items: center;
`;

//TEXT STYLES BELOW!
const Title = styled(LargeTitleStyle)`
  color: #4572a7;
  margin: 15px 0px;
`;
const Subtitle = styled(TitleStyle)`
  display: flex;
  font-weight: normal;
  padding: 0 30px;
  position: relative;
  width: 100%;
  margin: 10px 0 13px 0;
`;

const SessionCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px 0;
  padding: 15px;
  min-width: 400px;
  // Additional styling for each session card
`;

function formatDuration(duration) {
  const minutes = Math.floor(duration / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds} minutes`;
}
