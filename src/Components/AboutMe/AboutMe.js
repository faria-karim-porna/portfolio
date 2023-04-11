import React, { useEffect } from "react";
import "./AboutMe.css";
import proPic from "../../images/proPic.png";
// import ParticleComponent from "../../ParticleComponent";
// import ScrollAnimation from 'react-animate-on-scroll';
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="pl-5 pr-5 about d-flex align-items-center" id="about" data-aos="fade-right">
      <div className="row">
        <div className="col-md-5">
          <div className="d-flex justify-content-center">
            <img src={proPic} className="img-fluid proPic" />
          </div>
        </div>
        <div className="col-md-7 about-text">
          <div className="upperLine"></div>
          <p className="about-me-text">
            <span className="about-me-intro">I'm</span>
            <span className="about-me-name"> Faria Karim Porna</span> <br />
            <span className="about-me-details">
              Currently I am studying at North South University. A highly passionate and hard-working individual aiming to obtain a
              challenging career with opportunities in a competitive world to utilize the expertise, knowledge, creativity, technical skills
              and enthusiasm for the better achievement and professional development of the organization.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
