import React from 'react';
import { plantsList } from '../AppConfig.jsx';
import PlantItem from '../components/PlantItem';
import '../App.css';
import '../styles/dashboard.css';

const Dashboard = ({ setScreen }) => {
  const user = "Alex";

  const handlePlantItemClick = (selectedPlant) => {
    if (selectedPlant) {
      console.log("in handlePlantItemClick, selectedPlant", selectedPlant.name);
      setScreen("plant-profile", selectedPlant); // Pass both screen name and selected plant data
    }
  };

  return (
    <div className="dashboard page">
      <img className="background-leaf-left" src={require(`../images/left_leaf.png`)} alt="Background Leaf Left" />
      <img className="background-leaf-right" src={require(`../images/background_leaf.png`)} alt="Background Leaf Right" />
      <div className="welcome-container">
        <img src={require(`../images/welcome_background.png`)} alt="welcome container"/>
        <h1 className="font-extrabold text-3xl inline welcome-text">Welcome, {user}</h1>
      </div>
      <div className="plant-list">
        {plantsList.map((plant, index) => (
          <PlantItem 
            key={index} 
            name={plant.name} 
            image={plant.image} 
            sun={plant.requirements.sun} 
            water={plant.requirements.water} 
            warning={plant.warning} // Pass the warning prop
            onClick={() => handlePlantItemClick(plant)} 
          />
        ))}
      </div>
      <button className="add-button" onClick={() => setScreen("plant-search")}>
        <img src={require(`../images/add_button.png`)} alt="Add" />
      </button>
    </div>
  );
};

export { Dashboard };
