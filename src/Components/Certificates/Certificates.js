import React from "react";
import CertificatesCard from "../CertificatesCard/CertificatesCard";
import Navigation from "../Navigation/Navigation";
import SideNav from "../SideNav/SideNav";
import "./Certificates.css";
const Certificates = () => {
  return (
    <div className="body">
      <div className="side">
        <SideNav></SideNav>
      </div>
      <div className="main">
        <Navigation></Navigation>
        <div className="container">
          <p className="section-name">Certificates</p>
          <div className="section-underline"></div>
          <div className="row mt-4">
            <CertificatesCard></CertificatesCard>
            {/* <CertificatesCard></CertificatesCard>
            <CertificatesCard></CertificatesCard> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
