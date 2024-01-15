import React from "react";
import Card from "../components/homePage/Card.jsx";
import Section from "../components/homePage/Section.jsx";
import Wave from "../components/homePage/Wave.jsx";
import { Link } from "react-router-dom";
import wallpaperImage from "../assets/wallpaper2.jpg";
import logoImage from "../assets/logo-react.png";
import uiImage from "../assets/ui-design.jpg";
import gymImage from "../assets/gym.jpg.avif";
import agGridImage from "../assets/ag-grid.jpg";
import "../styles/Home-Page.css";

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <section className="Hero">
        <div className="HeroGroup">
          <h1>Weblab UI Playground</h1>
          <p>This site is Jose's UI playground for weblab</p>
          <h2>Sections</h2>
          <Link to="ui">UI Components</Link>
          <Link to="gym">Gym Landing Page</Link>
          <Link to="other">Other</Link>
          <Wave />
        </div>
      </section>

      <div className="Cards">
        <h2>3 projects, more coming</h2>
        <div className="CardGroup">
          <Link to="ui">
            <Card title="UI" text="Not started yet" image={uiImage} />{" "}
          </Link>

          <Link to="gym">
            <Card title="Gym" text="In progress" image={gymImage} />
          </Link>
          <Link to="other">
            <Card title="Other" text="Not started yet" image={agGridImage} />
          </Link>
        </div>
      </div>

      <Section
        image={wallpaperImage}
        logo={logoImage}
        title="Resources"
        text={
          <div>
            <p>Here I will link the sources I use or get inspiration from</p>
          </div>
        }
      />
    </div>
  );
}

export default Home;
