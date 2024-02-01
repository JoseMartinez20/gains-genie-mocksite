import React from "react";
import styled from "styled-components";

const WorkoutCell = ({ workout, onClick }) => {
  // Renamed action to onClick for clarity
  return (
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
  );
};

export default WorkoutCell;

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
