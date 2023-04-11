import React from "react";
import Github from "../Github/Github";
import Technologies from "../Technologies/Technologies";
import "./ProjectsCard.css";
// import project1 from '../../images/project/project1.png';
const ProjectsCard = (props) => {
  const project = props.project;
  const technologies = project.technologies;
  const github = project.github;
  const hasLiveSite = project.has_live_site;
  const liveSite = project.live_site;
  return (
    <div className="row project">
      <div className="col-md-7 col-sm-12">
        <img src={require(`../../images/project/${project.image}`)} className="img-fluid project-image" />
      </div>
      <div className="col-md-5 col-sm-12 project-text">
        <div className="project-main-text">
          <p className="project-name">{project.project_name}</p>
          <p className="project-detail">{project.project_description}</p>
          {technologies.map((technology) => (
            <Technologies technology={technology}></Technologies>
          ))}
          <div className="project-buttons">
            {github.map((github) => (
              <Github github={github}></Github>
            ))}{" "}
            {hasLiveSite ? (
              <a href={liveSite} target="_blank">
                <button>Live Site</button>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
