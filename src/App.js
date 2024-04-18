// App.js
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

// Data
import { cilantroForum } from './AppConfig';

// Pages
import { PlantProfile } from './pages/PlantProfile';
import { SeasonInsights } from './pages/SeasonInsights';
import { Dashboard } from './pages/Dashboard';
import { PlantSearch } from './pages/PlantSearch';
import { AddPlant } from './pages/AddPlant'; // Import the AddPlant component

function App() {
  const [index, setIndex] = useState(1); // Initial index state
  const [selectedPlant, setSelectedPlant] = useState(null); // State for selected plant

  const styles = {
    slideContainer: {
      height: "100vh",
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
    }
  };

  // Mapping of screen names to indices
  const screenIndices = {
    'season-insights': 0,
    'dashboard': 1,
    'plant-profile': 2,
    'plant-search': 3,
    'add-plant': 4 // Added the 'add-plant' screen index
  };

  // Function to set screen based on name
  const setScreen = (screenName, selectedPlant = null) => {
    const newIndex = screenIndices[screenName];
    if (newIndex !== undefined) {
      setIndex(newIndex);
      setSelectedPlant(selectedPlant); // Set the selected plant when navigating to a screen
    } else {
      console.warn('Unknown screen name:', screenName);
    }
  };

  // Conditionally render PlantSearch or other views on a slider
  if (index === screenIndices["plant-search"]) {
    return (
      <PlantSearch setScreen={setScreen}/>
    );
  } else if (index === screenIndices["add-plant"]) {
    return (
      <AddPlant setScreen={setScreen} selectedPlant={selectedPlant}/> // Pass the selected plant data to AddPlant
    );
  } else {
    return (
      <SwipeableViews
        containerStyle={styles.slideContainer}
        enableMouseEvents
        index={index} // Control the current index
        onChangeIndex={setIndex} // Update index state on change
      >
        <SeasonInsights setScreen={setScreen}/>
        <Dashboard setScreen={setScreen}/>
        <PlantProfile setScreen={setScreen} plant={selectedPlant} forum={cilantroForum} />
      </SwipeableViews>
    );
  }
}

export default App;
