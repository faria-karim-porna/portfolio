import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
           <a className="navbar-brand" href="#"><Link to = "/" className = "link"><div className = "logo">FKP</div></Link></a>
  <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mt-auto">
      <li className="nav-item active">
        <Link to = "/" className ="link"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item active">
        <a className="nav-link" href="#skill">Skills <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#problemSolving">Problem Solving <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#project">Projects <span className="sr-only">(current)</span></a>
      </li>
      
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Projects
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
         <a className="dropdown-item" href="#">MERN Stack</a>
          <a className="dropdown-item" href="#">React.js</a>
          </div>
      </li> */}
      <li className="nav-item active">
        <a className="nav-link" href="#blog">Blogs <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <Link to = "/publications" className = "link"><a className="nav-link" href="#">Publications <span className="sr-only">(current)</span></a></Link>
      </li>
      <li className="nav-item active">
        <Link to = "/certificates" className = "link"><a className="nav-link" href="#">Certificates <span className="sr-only">(current)</span></a></Link>
      </li>

      <li className="nav-item">
      <a href = "#footer" className = "link"><div className = "navigationButton">Contact</div></a>
      </li>

      <li className="nav-item">
     <a href = "https://drive.google.com/file/d/1OhmmDI4CjzrvfEVa_X6-iXT159cffJkP/view?usp=sharing" className = "link"><div className = "navigationButton">Resume</div></a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Navigation;