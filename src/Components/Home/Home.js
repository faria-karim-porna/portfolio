import React from "react";
import SideNav from "../SideNav/SideNav";
import AboutMe from "../AboutMe/AboutMe";
import Blog from "../Blog/Blog";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Skills from "../Skills/Skills";
import "./Home.css";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import ProblemSolving from "../ProblemSolving/ProblemSolving";

const Home = () => {
  return (
    <div className="body">
      <div className="side">
        <SideNav></SideNav>
      </div>
      <div className="main">
        <Navigation></Navigation>
        <Header></Header>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <ProblemSolving></ProblemSolving>
        <Projects></Projects>
        <Blog></Blog>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
