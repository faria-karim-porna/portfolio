import React from "react";
import "./ProblemSolvingCard.css";
const ProblemSolvingCard = () => {
  return (
    <div className="col-md-12">
      <div className="problem-solving-card pt-5">
        <ul>
          <li className="problem-solving-details pl-3 pr-3">Successfully completed off-sight round of ACM ICPC 2018</li>
          <li className="problem-solving-details pl-3 pr-3">Solved 100+ problems in various online judge</li>
          <li className="problem-solving-details pl-3 pr-3">
            3 star code at HackerRank. Credential :{" "}
            <a href="https://www.hackerrank.com/faria_porna_08" className="credential" target="_blank">
              https://www.hackerrank.com/faria_porna_08
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProblemSolvingCard;
