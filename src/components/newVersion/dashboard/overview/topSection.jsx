import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { OverviewLargeText } from "../../../../styles/texStyles";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../../../config/firebase";
import UserManager from "../../../../config/userManager";

function TopSection() {
  const [workoutSessions, setWorkoutSessions] = useState([]);
  const userData = UserManager();

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

  const totalVolume = workoutSessions.reduce((total, session) => {
    const sessionVolume = session.exercises.reduce((sessionTotal, exercise) => {
      const exerciseVolume = exercise.sets.reduce((exerciseTotal, set) => {
        // Ensure that reps and weight are numbers before multiplying
        const reps = Number(set.reps) || 0;
        const weight = Number(set.weight) || 0;
        return exerciseTotal + reps * weight;
      }, 0);
      return sessionTotal + exerciseVolume;
    }, 0);
    return total + sessionVolume;
  }, 0);

  // Format the total volume for display (e.g., as '9k' for 9000)
  const formatVolume = (volume) => {
    if (volume >= 1000) {
      return (volume / 1000).toFixed(1) + "k"; // One decimal place for thousands
    }
    return volume.toString();
  };

  const totalDuration = workoutSessions.reduce((total, session) => {
    return total + (session.duration || 0);
  }, 0);

  // Function to format duration from milliseconds to hours and minutes
  const formatDuration = (duration) => {
    const totalSeconds = Math.floor(duration / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Format for hours and minutes
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    // Format for only minutes and seconds
    if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    }
    // Format for only seconds
    return `${seconds}s`;
  };

  const totalWorkoutSessions = workoutSessions.length;

  return (
    <Container>
      <TitleContainer>
        <Title>Overview</Title>
      </TitleContainer>
      <CardsContainer>
        <Card
          title="Total Workouts"
          value={totalWorkoutSessions.toString()} // Convert number to string
          misc={"# workouts"}
          color={"#E5F6EC"}
        />
        <Card
          title="Total Volume"
          value={formatVolume(totalVolume)} // Format the volume for display
          misc={"lbs"}
          color={"#F6E5E5"}
        />
        <Card
          title="Time in Gym"
          value={formatDuration(totalDuration)}
          misc={"total"}
          color={"#E5ECF6"}
        />
        <Card
          title="Calorie Goal"
          value={userData?.calorieGoal || "2000"}
          misc={"kcal"}
          color={"#E5F6EC"}
        />
      </CardsContainer>
    </Container>
  );
}
export default TopSection;

const Container = styled.div.attrs({
  className: "Top Section Container",
})`
  display: flex;
  flex-direction: column;
`;

const CardsContainer = styled.div.attrs({
  className: "Cards Container",
})`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`;

const TitleContainer = styled.div.attrs({
  className: "Title Container",
})`
  display: flex;
`;

const Title = styled(OverviewLargeText).attrs({
  className: " Title",
})`
  display: flex;
`;
