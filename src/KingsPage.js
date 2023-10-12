import king1 from './assets/images/lucy.jpeg';
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
  return (
    <div className="kings-page">
      <h1>Our Kings</h1>
      <div className="photo-gallery">
        {kingsData.map((king, index) => (
          <div key={index} className="photo-container">
            <img src={king.image} alt={king.name} />
            <div className="description">
              <h2>{king.name}</h2>
              <ul>
                <li><strong>Breed:</strong> {king.breed}</li>
              </ul>
              <p>{king.description}</p>
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

  
  export default KingsPage;