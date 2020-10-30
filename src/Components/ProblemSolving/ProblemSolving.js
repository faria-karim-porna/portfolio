import React, { useEffect } from 'react';
import ProblemSolvingCard from '../ProblemSolvingCard/ProblemSolvingCard';
import './ProblemSolving.css';
import Aos from "aos";
import "aos/dist/aos.css";
const ProblemSolving = () => {
    useEffect( () => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <body>
            <div className = "container problem-solving" id = "problemSolving" data-aos = "fade-right">
            <p className = "home-section-name">Problem Solving</p>
                <div className = "d-flex justify-content-center"><div className = "home-section-underline mb-5"></div></div>
                <div className = "row d-flex justify-content-around">
                    <ProblemSolvingCard></ProblemSolvingCard>
                </div>
            </div>
        </body>
    );
};

export default ProblemSolving;