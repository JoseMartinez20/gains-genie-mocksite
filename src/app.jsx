import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home-Page";
import GymLandingPage from "./pages/Gym-Landing-Page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gymLandingPage" element={<GymLandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
