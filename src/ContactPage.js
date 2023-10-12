import React, { useState } from 'react';
import './assets/styles/ContactPage.css';
import emailjs from 'emailjs-com';

function ContactPage() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hjgpz3p', 'template_bjb19on', e.target, 'VhgRK_GQwjN2Ophed')
      .then((result) => {
        console.log(result.text);
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>
          <i className="fa fa-phone"></i> Phone: 510-902-8489
        </p>
        <p>
          <i className="fa fa-envelope"></i> Email: info@charliesdoll.com
        </p>
        <p>
          <i className="fa fa-facebook-square"></i> Facebook Page:{' '}
          <a href="https://www.facebook.com/profile.php?id=100092352295293">Charlies Doll Facebook Page</a>
        </p>
        <p>
          <i className="fa fa-instagram"></i> Instagram Page:{' '}
          <a href="https://instagram.com/charlies_doll_cattery?igshid=OGQ5ZDc2ODk2ZA==">Charlies Doll Instagram</a>
        </p>
      </div>

      <div className="contact-form">
        <h2>Send us a Message</h2>
        {isFormSubmitted ? (
          <p className="success-message">Thank you for contacting us! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        )}
      </div>


      <footer className="footer">
        <p>© 2023 Charlie's Doll Cattery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactPage;
