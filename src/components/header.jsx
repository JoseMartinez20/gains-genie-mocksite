import React from "react";
import "../styles/header.css";
import logo from "../assets/g-dumbbell.svg";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 0) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link id="logoLink" to="/">
            <img src={logo} width="40" height="40" />
          </Link>
          <Link to="gymLandingPage">Gym Landing Page</Link>
          <Link to="ui">UI Components</Link>
          <Link to="other">Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default Header;
