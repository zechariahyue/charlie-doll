import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import KingsPage from './KingsPage';
import QueensPage from './QueensPage';
import KittensPage from './KittensPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
document.head.appendChild(fontAwesomeLink);

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/kings">Kings</Link>
            <Link to="/queens">Queens</Link>
            
            <Link to="/kittens">Kittens</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/kings" element={<KingsPage />} />
            <Route path="/queens" element={<QueensPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/kittens" element={<KittensPage />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
