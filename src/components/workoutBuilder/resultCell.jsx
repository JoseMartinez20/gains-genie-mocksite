import React from "react";
import styled from "styled-components";

const ResultCell = ({ exercise, onSelectExercise }) => {
  return (
    <CellContainer onClick={() => onSelectExercise(exercise)}>
      <ExerciseName>{exercise.name}</ExerciseName>
      <ExerciseDetail>
        Muscles Targeted: {exercise.primaryMuscles}
      </ExerciseDetail>
      <ExerciseDetail>Equipment: {exercise.equipment}</ExerciseDetail>
      <ExerciseDetail>Category: {exercise.category}</ExerciseDetail>
      {/* Add more exercise details as needed */}
    </CellContainer>
  );
};

export default ResultCell;

const CellContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  background-color: #f8f8f8;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform ease 0.2s, box-shadow ease 0.2s;

  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
`;

const ExerciseName = styled.h3`
  margin: 0;
  color: #444;
`;

const ExerciseDetail = styled.p`
  margin: 5px 0;
`;
