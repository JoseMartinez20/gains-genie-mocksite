import React from "react";
import styled from "styled-components";
import ProfileSection from "./profileSection";
import UserManager from "../../../../config/userManager";
import PagesSection from "./pagesSection";
import LogoSection from "./logoSection";
import { Button } from "../../../../sections/landingPage/HeroSection";
import { signOut } from "firebase/auth";
import { auth } from "../../../../config/firebase";

function NewNavBar() {
  const userData = UserManager();

  const logout = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <NavBarContainer>
      <NavSectionContainer>
        <ProfileSection
          firstName={userData?.firstName || "John"}
          lastName={userData?.lastName || "Doe"}
          userName={userData?.userName || "JohnDoe69"}
        />
        <PagesSection />
      </NavSectionContainer>
      <BottomSectionContainer>
        <LogOutButton onClick={logout}>Logout</LogOutButton>
        <LogoSection />
      </BottomSectionContainer>
    </NavBarContainer>
  );
}
export default NewNavBar;

const NavBarContainer = styled.div.attrs({
  className: "NavBar Container",
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 220px;
  height: 100vh;
  padding: 16px;
  border-right: 1px solid rgba(28, 28, 28, 0.1);
  background-color: white;
`;

const NavSectionContainer = styled.div.attrs({
  className: "NavBar Container",
})``;

const BottomSectionContainer = styled.div.attrs({
  className: "NavBar Container",
})`
  display: flex;
  flex-direction: column;
`;

const LogOutButton = styled(Button)`
  margin: 10px 0px;
  width: 100px;
  align-self: center;
`;
