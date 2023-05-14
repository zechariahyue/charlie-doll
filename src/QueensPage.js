import React, { useState } from 'react';
import './assets/styles/QueensPage.css';
import queen1 from './assets/images/Lychee.jpeg';
import queen2 from './assets/images/Monkey.jpeg';
import queen3 from './assets/images/McSteamy.jpeg';
import queen4 from './assets/images/Grey.jpeg';

const queensData = [
  {
    id: 1,
    image: queen1,
    name: 'Lychee',
    breed: 'Ragdoll',
  },
  {
    id: 2,
    image: queen2,
    name: 'Monkey',
    breed: 'Ragdoll',
  },

  {
    id: 3,
    image: queen3,
    name: 'McSteamy',
    breed: 'Ragdoll',
  
  },

  {
    id: 4,
    image: queen4,
    name: 'Grey',
    breed: 'Ragdoll',
  }
  // Add more queens data objects here...
];

function QueensPage() {
  const [currentQueenIndex, setCurrentQueenIndex] = useState(0);
  const currentQueen = queensData[currentQueenIndex];

  const handlePreviousQueen = () => {
    setCurrentQueenIndex((prevIndex) => (prevIndex === 0 ? queensData.length - 1 : prevIndex - 1));
  };

  const handleNextQueen = () => {
    setCurrentQueenIndex((prevIndex) => (prevIndex === queensData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="queens-page">
      <h1>Our Queens</h1>
      <div className="photo-gallery">
        <div className="photo-container">
          <img src={currentQueen.image} alt={currentQueen.name} />
          <div className="description">
            <h2>{currentQueen.name}</h2>
            <ul>
              <li><strong>Breed:</strong> {currentQueen.breed}</li>
            </ul>
            <p>{currentQueen.description}</p>
          </div>
        </div>
        <div className="arrow-buttons">
          <button className="previous-button" onClick={handlePreviousQueen}>&#8249;</button>
          <button className="next-button" onClick={handleNextQueen}>&#8250;</button>
        </div>
      </div>
      <footer className="footer">
        <p>© 2023 Charlie's Doll Cattery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default QueensPage;
