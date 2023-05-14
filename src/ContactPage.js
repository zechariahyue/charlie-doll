import React from 'react';
import './assets/styles/ContactPage.css';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>For inquiries or any questions, please feel free to reach out to us.</p>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <i className="fa fa-phone"></i> Phone: 573-424-9354
        </p>
        <p>
          <i className="fa fa-envelope"></i> Email: example@example.com
        </p>
        <p>
          <i className="fa fa-facebook-square"></i> Facebook Page: <a href="https://www.facebook.com/example">Example Facebook Page</a>
        </p>
      </div>

      <div className="contact-form">
        <h2>Send us a Message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      <footer className="footer">
        <p>© 2023 Charlie's Doll Cattery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactPage;
