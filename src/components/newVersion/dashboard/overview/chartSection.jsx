import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../../../config/firebase";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartSection() {
  const [workoutSessions, setWorkoutSessions] = useState([]);
  const [workoutTimes, setWorkoutTimes] = useState(new Array(7).fill(0));

  useEffect(() => {
    const fetchWorkoutSessions = async () => {
      const user = auth.currentUser;
      if (user) {
        const q = query(
          collection(db, "workoutSessions"),
          where("userId", "==", user.uid)
        );
        try {
          const querySnapshot = await getDocs(q);
          const sessions = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            date: doc.data().date.toDate(), // Convert Firestore Timestamp to JavaScript Date
          }));
          setWorkoutSessions(sessions);
        } catch (error) {
          console.error("Error fetching workout sessions:", error);
        }
      }
    };

    fetchWorkoutSessions();
  }, []);

  useEffect(() => {
    aggregateWorkoutTimes();
  }, [workoutSessions]);

  const aggregateWorkoutTimes = () => {
    const last7Days = new Date();
    last7Days.setDate(last7Days.getDate() - 7);
    let times = new Array(7).fill(0);

    workoutSessions.forEach((session) => {
      if (session.date >= last7Days) {
        // Get local day of the week
        const localDate = new Date(
          session.date.getTime() - session.date.getTimezoneOffset() * 60000
        );
        const dayIndex = localDate.getDay(); // Sunday - 0, Monday - 1, etc.
        const durationMinutes = session.duration / (1000 * 60);
        times[dayIndex] += durationMinutes;
      }
    });

    setWorkoutTimes(times.map((time) => parseFloat(time.toFixed(2))));
  };

  const workoutData = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Workout Time (minutes)",
        data: workoutTimes,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 10,
        hoverBackgroundColor: "#fff",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Minutes",
        },
      },
      x: {
        title: {
          display: true,
          text: "Days of the Week",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const value = context.raw;
            return `${label}: ${value.toFixed(2)} minutes`;
          },
        },
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <Container>
      <Bar data={workoutData} options={options} />
    </Container>
  );
}
export default ChartSection;

const Container = styled.div.attrs({
  className: "Chart Section Container",
})`
  display: flex;
  height: 330px;
  max-width: 630px;
  padding: var(--24, 24px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--16, 16px);
  flex: 1 0 0;
  border-radius: var(--16, 16px);
  background: var(--Primary-Light, #f7f9fb);
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
`;
