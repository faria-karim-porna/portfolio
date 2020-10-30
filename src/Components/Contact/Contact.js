import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Navigation from '../Navigation/Navigation';
import SideNav from '../SideNav/SideNav';

const Contact = () => {
    return (
        <div className = "body">
            <div className = "side">
                <SideNav></SideNav>
            </div>
            <div className = "main">
            <Navigation></Navigation>
            <ContactForm></ContactForm>
            </div>  
        </div>
    );
};

export default Contact;