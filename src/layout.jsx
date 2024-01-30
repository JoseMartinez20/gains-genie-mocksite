import React, { useEffect, useState } from "react";
import NewNavBar from "./components/newVersion/dashboard/navBar/NewNavBar";
import styled from "styled-components";
import { auth, db } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

function Layout({ children }) {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState(null); // state to hold user status

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // set user state
      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        getDoc(userRef)
          .then((userDoc) => {
            if (userDoc.exists()) {
              setHasOnboarded(userDoc.data().onboardingComplete);
            }
            setCheckingAuth(false);
          })
          .catch((err) => {
            console.error(err);
            setCheckingAuth(false);
          });
      } else {
        setHasOnboarded(false);
        setCheckingAuth(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (checkingAuth) {
    return <Container loggedIn={false}>Loading...</Container>; // Or some loading indicator
  }

  return (
    <Container loggedIn={!!user && hasOnboarded}>
      {hasOnboarded && <NewNavBar />}
      <main>{children}</main>
    </Container>
  );
}

export default Layout;

// Modify your styled component to accept a prop and change styles accordingly
const Container = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.loggedIn
      ? "#fff"
      : "var(--background)"}; // Change #f0f0f0 to the color you want for logged-in users
`;
