import { Routes, Route } from "react-router-dom";
import GymLandingPage from "./pages/Gym-Landing-Page";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GymLandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
