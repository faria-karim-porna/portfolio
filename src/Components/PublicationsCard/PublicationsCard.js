import React from "react";
import "./PublicationsCard.css";
const PublicationsCard = (props) => {
  return (
    <div className="col-md-6 publication">
      <div className="publication-main">
        <div className="publication-name">
          <p className="publication-title">{props.title}</p>
        </div>
        <div className="publication-text">
          <p className="publication-tag">{props.type}</p>
          <p className="publication-details">{props.description}</p>
          <p className="publication-date">{props.publicationDate}</p>
        </div>
        {props.link ? (
          <a href={props.link} target="_blank">
            <div className="publication-button-section">
              <button className="publication-button">READ</button>
            </div>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default PublicationsCard;
