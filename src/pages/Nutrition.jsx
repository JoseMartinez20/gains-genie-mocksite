import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import ProfileHeader from "../sections/dashboardPage/ProfileHeader";

function Nutrition() {
  return (
    <div>
      <ProfileHeader />
      <NavBar />
      <h1 style={{ color: "red", textAlign: "center" }}>Nutrition Page</h1>
    </div>
  );
}

export default Nutrition;
