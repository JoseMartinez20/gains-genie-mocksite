import React from "react";
import { useState, useEffect } from "react";
import { auth, db } from "../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import styled from "styled-components";
import WorkoutCell from "./workoutCell";

function UserWorkouts() {
  const [userWorkouts, setUserWorkouts] = useState([]);

  useEffect(() => {
    const fetchUserWorkouts = async () => {
      const user = auth.currentUser;
      if (user) {
        const workoutsRef = collection(db, "workouts");
        const q = query(workoutsRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        setUserWorkouts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt.toDate(), // Convert Timestamp to Date
          }))
        );
      }
    };

    fetchUserWorkouts();
  }, []);

  return (
    <Container>
      <Title>Saved Workouts</Title>
      {userWorkouts.map((workout) => (
        <WorkoutCell key={workout.id} workout={workout} />
      ))}
    </Container>
  );
}

export default UserWorkouts;

const Container = styled.div``;

const Title = styled.h1`
  color: white;
`;
