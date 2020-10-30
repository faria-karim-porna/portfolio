import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Navigation from '../Navigation/Navigation';
import ProjectsCard from '../ProjectsCard/ProjectsCard';
import SideNav from '../SideNav/SideNav';
import './AllProjects.css';
const AllProjects = () => {
    const [projects, setProjects] = useState(fakeData);
    return (
        <div className = "body">
            <div className = "side">
                <SideNav></SideNav>
            </div>
            <div className = "main">
            <div className =  "container projects">
            <p className = "section-name">My Projects</p>
                <div className = "section-underline mb-5"></div>
                <Navigation></Navigation>
                {
                    projects.map(project => <ProjectsCard project = {project}></ProjectsCard>)
                }
            </div>
            </div>  
        </div>
    );
};

export default AllProjects;