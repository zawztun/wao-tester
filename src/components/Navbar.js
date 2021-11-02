import React from "react";
import { Link } from "gatsby";
import facebook from "../img/social/facebook.svg";
import wao from "../img/wao.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
        <nav
            className="navbar is-transparent"
            role="navigation"
            aria-label="main-navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item" title="Logo">
                        <img src={wao} alt="WAO" style={{ width: "88px" }} />
                    </Link>
                    {/* Hamburger menu */}
                    <div
                        className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                        data-target="navMenu"
                        role="menuitem"
                        tabIndex={0}
                        onKeyPress={() => this.toggleHamburger()}
                        onClick={() => this.toggleHamburger()}
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div
                    id="navMenu"
                    className={`navbar-menu ${this.state.navBarActiveClass}`}
                >
                    <div className="navbar-start has-text-centered">
                        <Link className="navbar-item" to="/about">
                            About
                        </Link>
                        <Link className="navbar-item" to="/products">
                            Activities
                        </Link>
                        <Link className="navbar-item" to="/blog">
                            Active-Projects
                        </Link>
                        <Link className="navbar-item" to="/contact">
                            Contact
                        </Link>
                        <Link className="navbar-item" to="/contact/examples">
                            Projects
                        </Link>
                    </div>
                    <div className="navbar-end has-text-centered">
                        <a
                            className="navbar-item"
                            href="https://www.facebook.com/World-Arakanese-Organization-159608264096846"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon">
                                <img src={facebook} alt="facebook" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
  }
};

export default Navbar;
