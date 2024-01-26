import React from "react";
import styled from "styled-components";

const WorkoutCell = ({ workout }) => {
  return (
    <WorkoutContainer>
      <WorkoutHeader>{workout.name}</WorkoutHeader>
      <h4>Exercises:</h4>
      <ExerciseList>
        {workout.exercises.map((exercise, index) => (
          <ExerciseItem key={index}>
            {exercise.name} - {exercise.sets} sets of {exercise.reps} reps
            {/* Display other details of exercise here if needed */}
          </ExerciseItem>
        ))}
      </ExerciseList>
    </WorkoutContainer>
  );
};

export default WorkoutCell;

const WorkoutContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
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
