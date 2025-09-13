import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
  <header className="header">
    <div className="nav container">
    <img src={logo} alt="" />
        
            <div className="nav-wrapper container">
                <nav className="nav">
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#process" className="nav-link">How It Works</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
            <div className="btn">
                <button className="btn btn-primary">Apply Now</button>
        </div>
        </div>
    </header>

      );
};

export default Navbar;
