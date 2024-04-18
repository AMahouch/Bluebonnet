import React, { useState } from 'react';
import '../App.css';
import '../styles/plant-search.css';
import searchIcon from '../images/search_icon.png'; // Import the search icon image
import backButton from '../images/back_button.png'; // Import the back button image
import { elligiblePlants } from '../AppConfig';

function PlantSearch({ setScreen }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleBackButtonClick = () => {
    setScreen('dashboard'); // Navigate back to the dashboard
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Filter eligible plants based on the search term
    const filteredPlants = elligiblePlants.filter((plant) =>
      plant.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredPlants);
  };

  const handlePlantClick = (plant) => {
    setScreen('add-plant', plant); // Navigate to the 'add-plant' screen with the selected plant data
  };

  return (
    <div className="plant-search page">
      <div className="back-button-container" onClick={handleBackButtonClick}>
        <img src={backButton} alt="Back button" />
      </div>
      <div className="title-container">
        <div className="plant-search-title text-center">Plant Search</div>
      </div>
      <div className="input-container">
        <img src={searchIcon} alt="Search" className="plant-search-icon" />
        <input
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="search-results">
        {searchResults.map((plant) => (
          <div className="search-result-item" key={plant.name} onClick={() => handlePlantClick(plant)}>
            <img src={require(`../images/${plant.image}`)} alt={plant.name} className="search-result-image" />
            <div className="search-result-name">{plant.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { PlantSearch };
