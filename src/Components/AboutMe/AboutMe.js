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
          <div className="about-me-text">
            <span className="about-me-intro">I'm</span>
            <span className="about-me-name"> Faria Karim Porna</span> <br />
            <p className="about-me-details">
              <p>
                Currently, I am working as a Software Engineer at Kaz Software where I am involved in testing and debugging code,
                implementing best coding practices, and ensuring the software is scalable and efficient. Moreover, as part of my
                responsibilities, I collaborate with cross-functional teams, such as product managers, designers, and other engineers, to
                understand project requirements and deliver solutions that meet business objectives.
              </p>
              <p>
                I have completed my graduation from North South University in the year 2020. I have achieved the highest “Summa Cum Laude”
                prestige from my university for having an excellent CGPA.
              </p>
              <p>
                I possess a wide range of work experience and have a keen interest in exploring new ideas. My skillset encompasses a sound
                understanding of Operating Systems, Data Structures and Algorithms, Computer Networks, Databases, Software Design Patterns,
                and different types of Software Architectures. I enjoy problem-solving a lot. To date, I have tackled and successfully
                resolved over 100 problems across various online judges, and my proficiency as a coder is reflected in my three-star status
                on HackerRank. Additionally, I have participated twice in the ACM ICPC, and in 2018, I qualified for the off-site round of
                the competition.
              </p>
              <p>
                I possess practical expertise in several backend frameworks such as Node.js, Django, and Laravel. Moreover, I have utilized
                React.js as a front-end library for most of the projects.
              </p>
              <p>For web-based projects, I have worked on both MySQL and NoSQL as the database system.</p>
              <p>
                Apart from my primary interests, I am also enthusiastic about Machine Learning. My research background includes experience
                in Fuzzy Systems. Additionally, I have completed various projects utilizing tools such as Tensorflow, Keras, as well as
                implementing models such as Convolutional Neural Networks (CNN) and Long Short-Term Memory (LSTM).
              </p>
              <p>
                Recently, my interests have expanded into the field of game development, and as a result, I have designed and developed two
                games. One of the games was created using Construct 2, while the other was built using Unity 3D.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
