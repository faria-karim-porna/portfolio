import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../images/footer.png';
import './Footer.css';
const Footer = () => {
    return (
        <div id = "footer">
            <div className = "container">
            <div className = "footer">
            <p className = "footer-line-one">What's next?</p>
            <p className = "footer-line-two">Contact With Me</p>
            <p className = "footer-line-three">I will love to hear from you.<br/> If you have any question about me, feel free to send me a message</p>
            <div className = "w-100 d-flex justify-content-center"><Link to = "/contact"><button className = "footer-button">Send Me A Message</button></Link></div>
            </div>
            </div>
            <img src = {footer} className = "img-fluid footer-image"/>
        </div>
    );
};

export default Footer;