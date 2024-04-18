import React from 'react';
import Plant from './plant';
import '../styles/PlantItem.css';


const PlantItem = ({ name, image, sun, water, warning, onClick }) => { // using OnClick prop
  return (
    <div className="plant-item" onClick={onClick}> 
      <Plant name={name} image={image} />
      <div className="plant-requirements">
        <div className="sun-requirement">
          <img
            loading="lazy"
            src={require(`../images/sun.png`)}
            alt="Sun Icon"
            className="sun-icon"
          />
          <span>{sun}</span>
        </div>
        <div className="water-requirement">
          <img
            loading="lazy"
            src={require(`../images/water.png`)}
            alt="Water Icon"
            className="water-icon"
          />
          <span>{water}</span>
        </div>
      </div>
      {warning && ( // Check if warning exists
        <div className="warning-container">
          <img
            loading="lazy"
            src={require(`../images/warnings/${warning}.png`)}
            alt="Warning Icon"
            className="warning-icon"
          />
        </div>
      )}
    </div>
  );
};

export default PlantItem;
