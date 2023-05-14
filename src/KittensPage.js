import React, { useState } from 'react';
import './assets/styles/KittensPage.css';
import kitten1 from './assets/images/kitten1.jpeg';
import kitten2 from './assets/images/kitten2.jpeg';
import kitten3 from './assets/images/Kitten3.jpeg';
import kitten4 from './assets/images/Kitten4.jpeg';
import kitten5 from './assets/images/kitten5.jpeg';
import kitten6 from './assets/images/Kitten6.jpeg';
const kittensData = [
  {
    id: 1,
    image: kitten1,
    name: 'Seal Bicolor',
    gender: 'Male (sold)',
  },
  {
    id: 2,
    image: kitten2,
    name: 'Blue Mitted Point',
    gender: 'Male ',
  },

  {
    id: 3,
    image: kitten3,
    name: 'Flame Lynx Point',
    gender: 'Male ',
  },
  {
    id: 4,
    image: kitten4,
    name: 'Blue bicolor',
    gender: 'Male ',
  },
  {
    id: 5,
    image: kitten5,
    name: 'Flame Point',
    gender: 'Male',
  },
  {
    id: 6,
    image: kitten6,
    name: 'Blue Flame Point ',
    gender: 'Female',
  },
  // Add more kittens data objects here...
];

function KittensPage() {
  const [currentKittenIndex, setCurrentKittenIndex] = useState(0);
  const currentKitten = kittensData[currentKittenIndex];

  const handlePreviousKitten = () => {
    setCurrentKittenIndex((prevIndex) => (prevIndex === 0 ? kittensData.length - 1 : prevIndex - 1));
  };

  const handleNextKitten = () => {
    setCurrentKittenIndex((prevIndex) => (prevIndex === kittensData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="kittens-page">
      <h1>Kittens</h1>
      <div className="photo-gallery">
        <div className="photo-container">
          <img src={currentKitten.image} alt={currentKitten.name} />
          <div className="description">
            <h2>{currentKitten.name}</h2>
            <ul>
              <li>
                <strong>Gender:</strong> {currentKitten.gender}
              </li>
            </ul>
            <p>{currentKitten.description}</p>
          </div>
        </div>
        <div className="arrow-buttons">
          <button className="previous-button" onClick={handlePreviousKitten}>
            &#8249;
          </button>
          <button className="next-button" onClick={handleNextKitten}>
            &#8250;
          </button>
        </div>
      </div>
      <footer className="footer">
        <p>© 2023 Charlie's Doll Cattery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default KittensPage;
