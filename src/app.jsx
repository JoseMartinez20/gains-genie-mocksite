import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import GymLandingPage from "./pages/Gym-Landing-Page";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<GymLandingPage />} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
