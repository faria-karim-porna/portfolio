import React, { useEffect, useState } from 'react';
import './Projects.css';
import ProjectsCard from '../ProjectsCard/ProjectsCard';
import Aos from "aos";
import "aos/dist/aos.css";
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';
const Projects = () => {
    const [projects, setProjects] = useState(fakeData);
    const homeProjects = projects.slice(0,3);
    return (
        <div>
            <div className =  "container projects" data-aos = "fade-left" id = "project">
            <p className = "home-section-name">Some Of My Projects</p>
                <div className = "d-flex justify-content-center"><div className = "home-section-underline mb-5"></div></div>
                {
                    homeProjects.map(project => <ProjectsCard project = {project}></ProjectsCard>)
                }
                <Link to = "/allProjects" className = "link"><p className = "project-more">. . . . . . . . . . . . . . . SEE MORE . . . . . . . . . . . . . . .</p></Link>
            </div>
        </div>
    );
};

export default Projects;