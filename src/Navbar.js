import "./Navbar.css";
import logo from "./images/code_logo.png";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

export default function NavBar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = prefersDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <ul className="fill">
          <li>
            <Link to="/">
              <img className="logo" src={logo} alt="CODE" />
            </Link>
          </li>
          <div className="mainNav">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Events" className="link">
                Events
              </Link>
            </li>
            <li>
              <Link to="/Team" className="link">
                Team
              </Link>
            </li>
            <li>
              <Link to="/Brochure" className="link">
                Brochure
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="link">
                Contact
              </Link>
            </li>
          </div>
          <li className="icons">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="sun-bright"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-sun-bright fa-fw fa-xl"
              onClick={toggleTheme}
            >
              <path
                fill="currentColor"
                d="M256 0c-13.3 0-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24zm0 400c-13.3 0-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24zM488 280c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0zM112 256c0-13.3-10.7-24-24-24l-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c13.3 0 24-10.7 24-24zM437 108.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-45.3 45.3c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L437 108.9zM154.2 357.8c-9.4-9.4-24.6-9.4-33.9 0L75 403.1c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l45.3-45.3c9.4-9.4 9.4-24.6 0-33.9zM403.1 437c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-45.3-45.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L403.1 437zM154.2 154.2c9.4-9.4 9.4-24.6 0-33.9L108.9 75c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l45.3 45.3c9.4 9.4 24.6 9.4 33.9 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224z"
                className=""
              ></path>
            </svg>
            <div className="burger" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </li>
        </ul>
      </nav>
      <div className={`sidebar ${isOpen ? "show" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          &times;
        </div>
        <ul className="menu">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Events" className="link">
              Events
            </Link>
          </li>
          <li>
            <Link to="/Team" className="link">
              Team
            </Link>
          </li>
          <li>
            <Link to="/Brochure" className="link">
              Brochure
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="link">
              Contact
            </Link>
          </li>
          <hr />
        </ul>
      </div>
    </>
  );
}
