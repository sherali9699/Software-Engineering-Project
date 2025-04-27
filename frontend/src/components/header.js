import React, { useState } from "react";
//import { Link } from "react-router-dom"; // If using routing, otherwise remove it
import Mainlogo from "../assets/Images/logo.png"; // Adjust the path as needed
import "../assets/css/style.css"; // Import your custom CSS if applicable

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#home">
              <img src={Mainlogo} alt="logo" className="img-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <i className="fas fa-stream navbar-toggler-icon"></i>
            </button>
            <div
              className={`collapse navbar-collapse justify-content-end ${
                isOpen ? "show" : ""
              }`}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto menu-navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#menu">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#offer">
                    Offer
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#review">
                    Review
                  </a>
                </li>
                {/* <li className="nav-item mt-3 mt-lg-0">
                  <a className="nav-link" href="#">
                    <button className="btn-main">Order Online</button>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
