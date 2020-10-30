import React from 'react';
import './PublicationsCard.css';
const PublicationsCard = () => {
    return (
        <div className = "col-md-6 publication">
            <div className = "publication-main">
            <div className = "publication-name"><p className = "publication-title">Publication title</p></div>
            <div className = "publication-text">
            <p className = "publication-tag">Journal</p>
            <p className = "publication-details">ExamHelpBD is the Edtech platform for Teachers and Students. Any teacher can post notes and questions here. Students can read and practice tests from anywhere and anytime.</p>
            <p  className = "publication-date">Date: 11.11.11</p>
            </div>
            <div className = "publication-button-section"><button className = "publication-button">READ</button></div>
            </div>
        </div>
    );
};

export default PublicationsCard;