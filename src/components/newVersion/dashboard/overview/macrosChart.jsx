import React, { useEffect, useState } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../../../config/firebase";
import styled from "styled-components";

Chart.register(ArcElement, Tooltip, Legend);

const macroGoals = {
  Protein: 220,
  Carbs: 192,
  Fats: 61,
};

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
      <MacroValue>{`${value.toFixed(2)} / ${goal} g`}</MacroValue>
    </MacroLineContainer>
  );
};

const MacrosProgress = () => {
  const [macroIntakes, setMacroIntakes] = useState({
    Protein: 0,
    Carbs: 0,
    Fats: 0,
  });

  useEffect(() => {
    const fetchMeals = async () => {
      const user = auth.currentUser;
      if (user) {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0); // Sets to the start of the current day

        const endOfDay = new Date(startOfDay);
        endOfDay.setDate(endOfDay.getDate() + 1); // Sets to the start of the next day

        const mealsRef = collection(db, "meals");
        const q = query(
          mealsRef,
          where("userId", "==", user.uid),
          where("timestamp", ">=", startOfDay),
          where("timestamp", "<", endOfDay)
        );

        let totalProtein = 0,
          totalCarbs = 0,
          totalFats = 0;
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const meal = doc.data();
          totalProtein += meal.totalProtein;
          totalCarbs += meal.totalCarbs;
          totalFats += meal.totalFat;
        });

        console.log("Total Protein:", totalProtein);
        console.log("Total Carbs:", totalCarbs);
        console.log("Total Fats:", totalFats);

        setMacroIntakes({
          Protein: totalProtein,
          Carbs: totalCarbs,
          Fats: totalFats,
        });
      }
    };

    fetchMeals();
  }, []);

  const userMacros = [
    macroIntakes.Protein,
    macroIntakes.Carbs,
    macroIntakes.Fats,
  ];

  const totalMacros = userMacros.reduce((a, b) => a + b, 0);

  const doughnutOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label;
            const value = context.raw;
            const percentage = totalMacros
              ? ((value / totalMacros) * 100).toFixed(2)
              : 0;
            return `${label}: ${percentage}%`;
          },
        },
      },
      legend: { display: false },
    },
    cutout: "70%",
  };

  const macroLabels = ["Protein", "Carbs", "Fats"];
  const macroColors = [
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(255, 205, 86)",
  ];

  const macrosData = {
    labels: macroLabels,
    datasets: [
      {
        data: userMacros,
        backgroundColor: macroColors,
        hoverOffset: 10,
      },
    ],
  };

  // Check for no meals
  if (totalMacros === 0) {
    return (
      <Container>
        <NoMealsMessage>No meals recorded for today.</NoMealsMessage>
      </Container>
    );
  }

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

const NoMealsMessage = styled.div`
  // Your styling for the message
  padding: 20px;
  text-align: center;
`;
