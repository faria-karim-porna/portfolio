import React from 'react';
import './CertificatesCard.css';
import cer from '../../images/certificate/certificate1.jpg';
const CertificatesCard = () => {
    return (
        <div className = "col-md-4 certificate">
            <img src = {cer} className = "img-fluid certificate-image"/>
        </div>
    );
};

export default CertificatesCard;