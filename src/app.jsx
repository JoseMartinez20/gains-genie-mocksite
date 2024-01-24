import { Routes, Route } from "react-router-dom";
import GymLandingPage from "./pages/Gym-Landing-Page";
import Dashboard from "./pages/Dashboard";
import Nutrition from "./pages/Nutrition";
import RoutinesPage from "./pages/All-Routines-Page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GymLandingPage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/nutrition" element={<Nutrition/>} />
        <Route path="/routines" element={<RoutinesPage/>} />
      </Routes>
    </div>
  );
}

export default App;
