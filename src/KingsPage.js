import king1 from './assets/images/Lucifer.jpeg';
import React, { useState } from 'react';
import './assets/styles/KingsPage.css';
import king2 from './assets/images/Seven.jpeg';
import king3 from './assets/images/McDreamy.jpeg';
import king4 from './assets/images/Lamborghni.jpeg';
const kingsData = [
  {
    id: 1,
    image: king3,
    name: 'McDreamy(Retired)',
    breed: 'Ragdoll',
  },
  {
    id: 2,
    image: king2,
    name: 'Seven (Retired)',
    breed: 'Ragdoll',
    
  },
  {
    id: 3,
    image: king1,
    name: 'Lucifer (Retired)',
    breed: 'Ragdoll',
  },

  {
    id: 4,
    image: king4,
    name: 'Lamborghini',
    breed: 'Ragdoll',
  },
  // Add more kings data objects here...
];

function KingsPage() {
    const [currentKingIndex, setCurrentKingIndex] = useState(0);
    const currentKing = kingsData[currentKingIndex];
  
    const handlePreviousKing = () => {
      setCurrentKingIndex((prevIndex) => (prevIndex === 0 ? kingsData.length - 1 : prevIndex - 1));
    };
  
    const handleNextKing = () => {
      setCurrentKingIndex((prevIndex) => (prevIndex === kingsData.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="kings-page">
        <h1>Our Kings</h1>
        <div className="photo-gallery">
          <div className="photo-container">
            <img src={currentKing.image} alt={currentKing.name} />
            <div className="description">
              <h2>{currentKing.name}</h2>
              <ul>
                <li><strong>Breed:</strong> {currentKing.breed}</li>
              </ul>
              <p>{currentKing.description}</p>
            </div>
          </div>
          <div className="arrow-buttons">
            <button className="previous-button" onClick={handlePreviousKing}>&#8249;</button>
            <button className="next-button" onClick={handleNextKing}>&#8250;</button>
          </div>
        </div>
        <footer className="footer">
          <p>© 2023 Charlie's Doll Cattery. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default KingsPage;