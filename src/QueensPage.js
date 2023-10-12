import React, { useState } from 'react';
import './assets/styles/QueensPage.css';
import queen1 from './assets/images/Lychee.jpeg';
import queen2 from './assets/images/Monkey.jpeg';
import queen3 from './assets/images/McSteamy.jpeg';
import queen4 from './assets/images/gr.jpeg';

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
  return (
    <div className="queens-page">
      <h1>Our Queens</h1>
      <div className="photo-gallery">
        {queensData.map((queen, index) => (
          <div key={index} className="photo-container">
            <img src={queen.image} alt={queen.name} />
            <div className="description">
              <h2>{queen.name}</h2>
              <ul>
                <li><strong>Breed:</strong> {queen.breed}</li>
              </ul>
              <p>{queen.description}</p>
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


export default QueensPage;
