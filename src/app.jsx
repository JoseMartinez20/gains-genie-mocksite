import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./config/firebase";
import GymLandingPage from "./pages/Gym-Landing-Page";
import Nutrition from "./pages/Nutrition";
import Workout from "./pages/Workout-Page";
import WorkoutBuilder from "./sections/workout/WorkoutBuilder";
import HistoryPage from "./pages/History-Page";
import DashboardJose from "./pages/newVersion/Dashboard-Jose";
import Layout from "./layout";

function ProtectedRoute({ children }) {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user is logged in");
        const userRef = doc(db, "users", user.uid);
        getDoc(userRef)
          .then((userDoc) => {
            if (userDoc.exists() && userDoc.data().onboardingComplete) {
              setHasOnboarded(true);
              console.log("has onboarded: true");
            } else {
              console.log("has onboarded: false");
            }
            setCheckingStatus(false);
          })
          .catch((err) => {
            console.error(err);
            setCheckingStatus(false);
          });
      } else {
        console.log("user is not logged in");
        setCheckingStatus(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (checkingStatus) {
    return <div>Loading...</div>; // Or some loading indicator
  }

  return hasOnboarded ? children : <Navigate to="/" />;
}

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<GymLandingPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardJose />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nutrition"
            element={
              <ProtectedRoute>
                <Nutrition />
              </ProtectedRoute>
            }
          />
          <Route
            path="/routines"
            element={
              <ProtectedRoute>
                <WorkoutBuilder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exercise"
            element={
              <ProtectedRoute>
                <Workout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboardJose"
            element={
              <ProtectedRoute>
                <DashboardJose />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Layout>
//         <Routes>
//           <Route path="/" element={<GymLandingPage />} />
//           <Route path="/dashboard" element={<DashboardJose />} />
//           <Route path="/nutrition" element={<Nutrition />} />
//           {/* <Route path="/routines" element={<RoutinesPage />} /> */}
//           <Route path="/routines" element={<WorkoutBuilder />} />
//           <Route path="/exercise" element={<Workout />} />
//           {/* <Route path="/history" element={<UserWorkoutSessions />} /> */}
//           <Route path="/history" element={<HistoryPage />} />
//           <Route path="/dashboardJose" element={<DashboardJose />} />
//         </Routes>
//       </Layout>
//     </div>
//   );
// }

// export default App;
