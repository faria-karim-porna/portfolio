import React from 'react';
import Navigation from '../Navigation/Navigation';
import PublicationsCard from '../PublicationsCard/PublicationsCard';
import SideNav from '../SideNav/SideNav';
import './Publications.css';
const Publications = () => {
    return (
        <div className = "body">
            <div className = "side">
                <SideNav></SideNav>
            </div>
            <div className = "main">
            <Navigation></Navigation>
            <div className = "container">
                <p className = "section-name">Publications</p>
                <div className = "section-underline"></div>
                <div className = "row mt-4">
                    <PublicationsCard></PublicationsCard>
                    <PublicationsCard></PublicationsCard>
                    <PublicationsCard></PublicationsCard>
                </div>
            </div>
           
            </div>  
        </div>
    );
};

export default Publications;