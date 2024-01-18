import React from "react";
import HeroSection from "../components/landingPage/HeroSection.jsx";
import Card from "../components/homePage/Card.jsx";
import Section from "../components/homePage/Section.jsx";
import { Link } from "react-router-dom";
import wallpaperImage from "../assets/wallpaper2.jpg";
import logoImage from "../assets/logo-react.png";
import uiImage from "../assets/ui-design.jpg";
import gymImage from "../assets/gym-background-blur.png";
import agGridImage from "../assets/ag-grid.jpg";
import styled from "styled-components";

function GymLandingPage() {
  return (
    <div>
      <HeroSection />
      <Cards>
        <h2>Packed with features</h2>
        <CardGroup>
          <Link to="ui">
            <Card title="Dashboard" text="Not started yet" image={uiImage} />
          </Link>
          <Link to="gym">
            <Card title="Lifting" text="In progress" image={gymImage} />
          </Link>
          <Link to="Nutrition">
            <Card title="Other" text="Not started yet" image={agGridImage} />
          </Link>
        </CardGroup>
      </Cards>

      <Section
        image={wallpaperImage}
        logo={logoImage}
        title="Resources"
        text={<p>Here I will link the sources I use or get inspiration from</p>}
      />
    </div>
  );
}

export default GymLandingPage;

const Cards = styled.div`
  h2 {
    margin: 50px 20px;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    background: linear-gradient(104deg, #050a27 0%, #4a548c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const CardGroup = styled.div`
  margin: 50px 40px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;

  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
