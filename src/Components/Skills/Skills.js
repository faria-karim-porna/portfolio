import React, { useEffect } from "react";
import "./Skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <body>
      <div className="container skills d-flex align-items-center justify-content-center" id="skill" data-aos="fade-left">
        <div className="row">
          <div className="col-md-5">
            <h5>OS Platforms:</h5>
            <div className="underLine"></div>
            <p>Windows</p>
            <h5>Programming Languages:</h5>
            <div className="underLine"></div>
            <p>C/C++</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Php (Familiar)</p>
            <p>Java (Familiar)</p>
            <p>Python (Familiar)</p>
            <h5>Frontend Frameworks:</h5>
            <div className="underLine"></div>
            <p>Bootstrap</p>
            <p>React.js</p>
            <p>Redux</p>
            <p>Redux Toolkit</p>
            <p>Material UI (Familiar)</p>
            <h5>Backend Frameworks:</h5>
            <div className="underLine"></div>
            <p>Node.js</p>
            <p>Django (Familiar)</p>
            <p>Laravel (Familiar)</p>
            <h5>Game Development:</h5>
            <div className="underLine"></div>
            <p>Construct 2 (Familiar)</p>
            <p>Unity 3D (Familiar)</p>
          </div>
          <div className="skill-border"></div>
          <div className="col-md-5">
            <h5>Databases:</h5>
            <div className="underLine"></div>
            <p>MongoDB</p>
            <p>Firebase</p>
            <p>MySQL</p>
            <h5>IDEs:</h5>
            <div className="underLine"></div>
            <p>Visual Studio Code</p>
            <p>Sublime Text</p>
            <p>Eclipse</p>
            <p>CodeBlocks</p>
            <h5>Tools:</h5>
            <div className="underLine"></div>
            <p>Git</p>
            <p>Heroku</p>
            <p>Netlify</p>
            <p>Railway</p>
            <p>Slack</p>
            <p>Chrome Dev Tools</p>
            <h5>Deep Learning Technologies:</h5>
            <div className="underLine"></div>
            <p>OpenCV</p>
            <p>Tensorflow (familiar)</p>
            <p>Keras (familiar)</p>
            <p>CNN</p>
            <p>LSTM</p>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Skills;
