import React from "react";
import { Link } from "react-router-dom";
import home_gif from "../../images/home.gif";
import home from "../../images/Home.mp4";
import "./Header.css";
const Header = () => {
  return (
    <div className="header position-relative">
      <video autoPlay playsInline loop muted src={home} className="img-fluid video" />

      <div className="header-text">
        <p>
          <span className="greeting-text">HI I'M</span> <br /> <span className="name-text">FARIA KARIM PORNA</span>
          <br />
        </p>
        <div>
          <p>
            <span className="designation-text">I'M </span>
            <span className="text_1 style-designation-text"> A PROGRAMMER</span>
            <span className="text_2 style-designation-text"> A WEB DEVELOPER</span>
            <span className="text_3 style-designation-text"> A DATA SCIENTIST</span>
            <span className="text_4 style-designation-text"> AN APP DEVELOPER</span>
          </p>
        </div>
        <a href="https://drive.google.com/file/d/1OhmmDI4CjzrvfEVa_X6-iXT159cffJkP/view?usp=sharing" className="link">
          <button className="headerButton">RESUME</button>
        </a>
        <Link to="/contact" className="link">
          <button className="headerButton">CONTACT</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
