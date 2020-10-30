import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_my', e.target, 'user_AW3RVrzUkvkFV73pV9qWD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    
    return (
        <div className = "d-flex justify-content-center contact-form">
           <div className="col-md-5 footer-form contact">
               <p className = "form-name">Contact Form</p>
                <form onSubmit = {sendEmail}>
                    <input type = "text" placeholder = "Subject" className = "w-100" name = "subject"></input>
                    <input type = "text" placeholder = "Your Email Address" className = "w-100" name = "email"></input>
                    <input type = "text" placeholder = "Your Name" className = "w-100"  name = "name"></input>
                    <textarea type = "text" placeholder = "Your message" className = "w-100 message" name = "message"></textarea>
                    <button className="btn btn-dark w-20 d-flex align-items-center" type = "submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;