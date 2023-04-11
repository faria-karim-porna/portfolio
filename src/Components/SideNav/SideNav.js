import React from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin, FaBlog } from "react-icons/fa";
const SideNav = () => {
  return (
    <body>
      <div className="d-flex align-items-center sideNav">
        <div className="sideNav-main">
          <a href="https://www.linkedin.com/in/faria-karim-4727a21b1/" target="_blank">
            <FaLinkedin className="sidenav-icons"></FaLinkedin>
          </a>
          <a href="https://github.com/faria-karim-porna" target="_blank">
            <FaGithub className="sidenav-icons"></FaGithub>
          </a>
          <a href="https://fariakarim.hashnode.dev/" target="_blank">
            <FaBlog className="sidenav-icons"></FaBlog>
          </a>
        </div>
      </div>
    </body>
  );
};

export default SideNav;
