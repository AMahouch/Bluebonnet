import React from 'react';
import { plantsList } from '../AppConfig.jsx';
import '../styles/plant.css';

const Plant = ({ name, image }) => {
  const plantData = plantsList.find(plant => plant.name === name);

  if (!plantData) {
    return null;
  }

  return (
    <div>
      <div className="plant-image-container">
        <img
          loading="lazy"
          src={require(`../images/${image}`)}
          alt={name}
          className="plant-image"
        />
      </div>
      <div className="plant-name">{name}</div>
    </div>
  );
};

export default Plant;