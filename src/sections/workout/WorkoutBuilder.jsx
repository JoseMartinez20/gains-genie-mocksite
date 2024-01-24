import React from "react";
import ExerciseSearchBar from "../../components/workoutBuilder/exerciseSearchBar";
import styled from "styled-components";
import UserWorkouts from "../../components/workoutBuilder/userWorkouts";
const WorkoutBuilder = () => {
  return (
    <Container>
      <ExerciseSearchBar />
      <UserWorkouts />
    </Container>
  );
};

export default WorkoutBuilder;

const Container = styled.div`
  display: flex;
`;
