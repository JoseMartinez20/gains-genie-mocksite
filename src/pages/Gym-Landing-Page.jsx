import React, { useEffect } from "react";
import { useState } from "react";
import HeroSection from "../sections/landingPage/HeroSection.jsx";
import Section from "../components/landingPage/Section.jsx";
import gymImage from "../assets/gym-background-blur.png";
import logoImage from "../assets/logo-react.png";
import CardSection from "../sections/landingPage/CardSection.jsx";
import WhySection from "../sections/landingPage/WhySection.jsx";
import JoinSection from "../sections/landingPage/JoinSection.jsx";
import { db } from "../config/firebase.js";
import { collection, doc, getDocs } from "firebase/firestore";
import styled from "styled-components";

function GymLandingPage() {
  const [userList, setUserList] = useState([]);

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // console.log({ filteredData });
        setUserList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getUserList();
  }, []);
  return (
    <div>
      <HeroSection />
      {/* <div>
        {userList.map((user) => (
          <div>
            <UserHeading>{user.firstName}</UserHeading>
            <UserHeading>{user.lastName}</UserHeading>
            <UserHeading>{user.weight}</UserHeading>
          </div>
        ))}
      </div> */}
      <CardSection />
      <WhySection />
      <JoinSection />
      <Section
        image={gymImage}
        logo={logoImage}
        title="Contact Us"
        text={"Here I will put contact info"}
      />
    </div>
  );
}

export default GymLandingPage;

const UserHeading = styled.h1`
  color: white;
`;
