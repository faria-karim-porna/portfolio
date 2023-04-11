import React from "react";
import "./CertificatesCard.css";
import certificate from "../../images/certificate/certificate1.jpg";
const CertificatesCard = () => {
  return (
    <div className="col-md-4 certificate">
      <img src={certificate} className="img-fluid certificate-image" />
    </div>
  );
};

export default CertificatesCard;
