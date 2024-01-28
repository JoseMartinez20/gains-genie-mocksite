import { Routes, Route } from "react-router-dom";
import GymLandingPage from "./pages/Gym-Landing-Page";
import Dashboard from "./pages/Dashboard";
import Nutrition from "./pages/Nutrition";
import RoutinesPage from "./pages/All-Routines-Page";
import Workout from "./pages/Workout-Page";
import UserWorkoutSessions from "./components/workoutSessions/UserWorkoutSessions";
import WorkoutBuilder from "./sections/workout/WorkoutBuilder";
import HistoryPage from "./pages/History-Page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GymLandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nutrition" element={<Nutrition />} />
        {/* <Route path="/routines" element={<RoutinesPage />} /> */}
        <Route path="/routines" element={<WorkoutBuilder />} />
        <Route path="/exercise" element={<Workout />} />
        {/* <Route path="/history" element={<UserWorkoutSessions />} /> */}
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
