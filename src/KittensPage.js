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
  return (
    <div className="kittens-page">
      <h1>Our Kittens</h1>
      <div className="photo-gallery">
        {kittensData.map((kitten, index) => (
          <div key={index} className="photo-container">
            <img src={kitten.image} alt={kitten.name} />
            <div className="description">
              <h2>{kitten.name}</h2>
              <ul>
                <li><strong>Breed:</strong> {kitten.breed}</li>
              </ul>
              <p>{kitten.description}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>© 2023 Charlie's Doll Cattery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default KittensPage;
