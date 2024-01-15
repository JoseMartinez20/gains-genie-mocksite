import React from "react";
import "../styles/header.css";
import logo from "../assets/logo-react.png";
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
          <Link to="/">
            <img src={logo} width="30" />
          </Link>
          <Link to="ui">UI Components</Link>
          <Link to="gym">Gym Landing Page</Link>
          <Link to="other">AG Grid Project</Link>
        </div>
      </div>
    );
  }
}

export default Header;
