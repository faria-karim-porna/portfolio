import React from 'react';

const Technologies = (props) => {
    const technology = props.technology;
    return (
        <div className = "project-tech">
            <p>{technology.tech_name}</p>
        </div>
        
    );
};

export default Technologies;