import React, { useState } from 'react';
import '../styles/add-plant.css';
import { plantsList } from '../AppConfig.jsx';

const AddPlant = ({ setScreen, selectedPlant }) => {
  const handleBackButtonClick = () => {
    setScreen('plant-search');
  };

  // State to manage pop-up visibility
  const [showPopup, setShowPopup] = useState(false);

  // State to store the list of plants
  const [plants, setPlants] = useState([]);

  const handleAddButtonClick = () => {
    setShowPopup(true);
  };

  const handleAddPlant = () => {
    setPlants([...plants, selectedPlant]);
    // Update the plantsList state with the new plant
    plantsList.push(selectedPlant);
    setShowPopup(false);
    // Navigate to dashboard
    setScreen('dashboard');
  };

  return (
    <div className="add-plant page">
      <div className="back-button-container" onClick={handleBackButtonClick}>
        <img src={require('../images/back_button.png')} alt="Back button" />
      </div>
      <div className="plant-profile">
        <img className="plant-image content-center" src={require(`../images/${selectedPlant.image}`)} alt={selectedPlant.name} />
        <div className="plant-title align-center text-center mb-3.5">{selectedPlant.name}</div>
        <div className="requirements">
          <div className="water-requirement2">
            <img className="requirement-icon" src={require('../images/water.png')} alt="Water icon" />
            <p className="requirement-text">{selectedPlant.requirements.water}</p>
          </div>
          <div className="sun-requirement2">
            <img className="requirement-icon" src={require('../images/sun.png')} alt="Sun icon" />
            <p className="requirement-text">{selectedPlant.requirements.sun}</p>
          </div>
        </div>
        <div className="description-section">
          <h3>Description</h3>
          <p>{selectedPlant.description}</p>
        </div>
        <div className="neighbor-comments">
          <h3>What locals in Arlington are saying</h3>
          {selectedPlant.comment && selectedPlant.comment.map((comment, index) => (
            <div className="comment" key={index}>
              <div className="icon">
                <img src={require(`../images/misty_icon.png`)} alt="User Icon" />
              </div>
              <div className="comment-details">
                <p><span className="commenter-name">{comment.name}</span></p>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="add-plant-button-container">
          <button className="add-plant-button" onClick={handleAddButtonClick}>ADD</button>
        </div>
      </div>
      {/* Pop-up */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to add {selectedPlant.name} to your garden?</p>
            <button className="add" onClick={handleAddPlant}>ADD</button>
            <button className="cancel" onClick={() => setShowPopup(false)}>CANCEL</button>
          </div>
        </div>
      )}
    </div>
  );
};

export { AddPlant };
