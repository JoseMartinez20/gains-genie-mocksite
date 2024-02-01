import React from "react";
import styled from "styled-components";

const SavedWorkoutCell = ({ workout, onClick }) => {
  // Renamed action to onClick for clarity
  return (
    <WorkoutContainer onClick={onClick}>
      <WorkoutHeader>{workout.name}</WorkoutHeader>
      <h4>Exercises:</h4>
      <ExerciseList>
        {workout.exercises.map((exercise, index) => (
          <ExerciseItem key={index}>
            • {exercise.name} (Targets: {exercise.primaryMuscles})
            {/* Display other details of exercise here if needed */}
          </ExerciseItem>
        ))}
      </ExerciseList>
    </WorkoutContainer>
  );
};

export default SavedWorkoutCell;

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

const WorkoutHeader = styled.h3`
  margin-top: 0;
  color: #333;
`;

const ExerciseList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ExerciseItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
`;
