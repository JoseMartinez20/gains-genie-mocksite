import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

// Doughnut chart data and goals for the macros
const macrosData = {
  labels: ["Protein", "Carbs", "Fats"],
  datasets: [
    {
      data: [180, 150, 70], // These are the current intake values
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const macroGoals = {
  Protein: 220,
  Carbs: 192,
  Fats: 61,
};

// Doughnut chart options
const doughnutOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: "80%",
};

// Styled components here...

// Component to render each macro line progress
const MacroLine = ({ macro, value, goal, color }) => {
  const percentage = (value / goal) * 100;
  const safePercentage = Math.min(percentage, 100);

  return (
    <MacroLineContainer>
      <MacroName>{macro}</MacroName>
      <ProgressBar>
        <Progress
          style={{ width: `${safePercentage}%`, backgroundColor: color }}
        />
      </ProgressBar>
      <MacroValue>{`${value} / ${goal} g`}</MacroValue>
    </MacroLineContainer>
  );
};

const MacrosProgress = () => {
  const userMacros = macrosData.datasets[0].data;
  const macroLabels = macrosData.labels;
  const macroColors = macrosData.datasets[0].backgroundColor; // Colors from the dataset

  return (
    <Container>
      <DoughnutContainer>
        <Doughnut data={macrosData} options={doughnutOptions} />
      </DoughnutContainer>
      <ProgressContainer>
        {macroLabels.map((macro, index) => (
          <MacroLine
            key={macro}
            macro={macro}
            value={userMacros[index]}
            goal={macroGoals[macro]} // The key here must match exactly
            color={macroColors[index]}
          />
        ))}
      </ProgressContainer>
    </Container>
  );
};

export default MacrosProgress;

// Continue with the styling for each component as before
const Container = styled.div.attrs({
  className: "Macros Chart Container",
})`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  max-height: 230px;
  max-width: 583px;
  padding: var(--24, 24px);
  border-radius: var(--16, 16px);
  background: var(--Primary-Light, #f7f9fb);
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
`;
// Styled components

const DoughnutContainer = styled.div`
  width: 30%;
  padding: 10px;
`;

const ProgressContainer = styled.div`
  width: 70%;
  padding: 0 0px 0px 20px;
`;

const MacroLineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const MacroName = styled.span`
  width: 15%;
  text-transform: capitalize;
`;

const ProgressBar = styled.div`
  width: 50%;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #82ca9d;
  border-radius: 5px;
`;

const MacroValue = styled.span`
  /* width: 20%; */
  text-align: right;
`;
