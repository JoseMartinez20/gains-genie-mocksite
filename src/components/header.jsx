import React, { useState, useEffect } from "react";
import "../styles/header.css";
import logo from "../assets/g-dumbbell.svg";
import { Link } from "react-router-dom";
import LogOutButton from "./auth/logoutButton";
import { auth, googleProvider } from "../config/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setHasScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoggedIn) {
    return (
      <div className={hasScrolled ? "Header HeaderScrolled" : "Header"}>
        <div className="HeaderGroup">
          <Link id="logoLink" to="/">
            <img src={logo} width="40" height="40" alt="logo" />
          </Link>
          <Link to="/">Placeholder</Link>
          <LogOutButton onClick={logout} title="Log Out" />
        </div>
      </div>
    );
  } else {
    return (
      <div className={hasScrolled ? "Header HeaderScrolled" : "Header"}>
        <div className="HeaderGroup">
          <Link id="logoLink" to="/">
            <img src={logo} width="40" height="40" alt="logo" />
          </Link>
          <Link to="/">Placeholder</Link>
          <LogOutButton onClick={signInWithGoogle} title="Log In" />
        </div>
      </div>
    );
  }
}

export default Header;
