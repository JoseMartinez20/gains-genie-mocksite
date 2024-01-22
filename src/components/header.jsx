import React, { useState, useEffect } from "react";
import "../styles/header.css";
import logo from "../assets/g-dumbbell.svg";
import { Link } from "react-router-dom";
import LogOutButton from "./auth/logoutButton";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setHasScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
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

  if (isLoggedIn) {
    return (
      <div className={hasScrolled ? "Header HeaderScrolled" : "Header"}>
        <div className="HeaderGroup">
          <Link id="logoLink" to="/">
            <img src={logo} width="40" height="40" alt="logo" />
          </Link>
          <Link to="ui">UI Components</Link>
          <LogOutButton />
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
          <Link to="ui">UI Components</Link>
        </div>
      </div>
    );
  }
}

export default Header;
