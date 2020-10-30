import React from 'react';

const Github = (props) => {
    const github = props.github;
    return (
        <a href = {github.link}><button>{github.name}</button></a>
    );
};

export default Github;