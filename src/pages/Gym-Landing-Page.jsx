import React from "react";
import Card from "../components/homePage/Card.jsx";
import Section from "../components/homePage/Section.jsx";
import Wave from "../components/homePage/Wave.jsx";
import { Link } from "react-router-dom";
import wallpaperImage from "../assets/wallpaper2.jpg";
import logoImage from "../assets/logo-react.png";
import uiImage from "../assets/ui-design.jpg";
import gymImage from "../assets/gym-background-blur.png";
import agGridImage from "../assets/ag-grid.jpg";
// import "../styles/Home-Page.css";
import styled, { keyframes } from "styled-components";

function GymLandingPage() {
  return (
    <div>
      <Hero>
        <HeroGroup>
          <h1>Gym Genie</h1>
          <p>This site is Jose's UI playground for weblab</p>
          <Link to="/">Sign Up</Link>
          <Wave />
        </HeroGroup>
      </Hero>

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

const HeroAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Hero = styled.section`
  background: url(${gymImage});
  height: 920px;
  background-size: cover;
  background-position: center;
  position: relative;

  h1 {
    margin: 0;
    color: white;
    font-size: 60px;
    line-height: 1.2;
    opacity: 0;
    animation: ${HeroAnimation};
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  h2 {
    color: white;
    opacity: 0;
    animation: ${HeroAnimation};
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 30px;
    line-height: 1.5;
    animation: ${HeroAnimation} 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
  }

  a {
    // Styles for anchor tags inside HeroGroup
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    padding: 9px 20px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    margin: 10px 100px;
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    animation: ${HeroAnimation};
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
      background: white;
      color: black;
    }
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 40px;
    }

    p {
      font-size: 24px;
    }
  }
`;

const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 150px 50px;
  text-align: center;
`;

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
