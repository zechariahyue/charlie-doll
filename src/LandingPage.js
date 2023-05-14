import React from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/styles/LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navigation">
          {/* Navigation menu */}
        </nav>
      </header>
      <section className="banner">
        <div className="banner-content">
          <h1 className="banner-title">Welcome to Charlie's Doll Cattery</h1>
          <p className="banner-description">Discover the finest feline companions bred with care and love.</p>
          <button className="banner-button" onClick={handleContactClick}>Contact Us</button>
        </div>
      </section>
      <footer className="footer">
        <p>© 2023 Charlie's Doll Cattery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
