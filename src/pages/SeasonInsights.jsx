import React, { useState } from 'react';
import '../App.css';
import WeatherForecast from '../components/WeatherForecast';
import { hourlyWeather, seasonalInsights, plantsList } from '../AppConfig';
import '../styles/season-insights.css';

function SeasonInsights({ setScreen }) {
  const [selectedSeason, setSelectedSeason] = useState("Spring");

  const handleSeasonChange = (event) => {
    const value = parseInt(event.target.value);
    let season = "Spring";

    // Determine the season based on the slider value
    if (value <= 33) {
      season = "Spring";
    } else if (value <= 66) {
      season = "Summer";
    } else if (value <= 99) {
      season = "Fall";
    } else {
      season = "Winter";
    }

    setSelectedSeason(season);
  };

  // Filter plants based on the selected season
  const seasonalPlants = plantsList.filter(plant => plant.name in seasonalInsights[selectedSeason]);

  return (
    <div className={`season-insights page ${selectedSeason.toLowerCase()}-background`}>

      <img className="background-leaf-left" src={require(`../images/left_leaf.png`)} alt="Background Leaf Left" />

      {/* Weather Forecast */}
      <div className="weather-container">
        {/* Render the big card for weather */}
        <div className="big-weather-card big-container">
          <p className="location">Arlington, Texas</p>
          {/* Render the first WeatherForecast component */}
          <WeatherForecast
            hour="1PM"
            temperature={hourlyWeather["1PM"].temperature}
            precip={hourlyWeather["1PM"].precip}
            wind={hourlyWeather["1PM"].wind}
            humidity={hourlyWeather["1PM"].humidity}
            icon={hourlyWeather["1PM"].icon}
          />
        </div>
        {/* Render three small cards next to each other */}
        <div className="small-weather-cards">
          {Object.entries(hourlyWeather).slice(1, 6).map(([hour, data], index) => (
            <div className="small-weather-card" key={index}>
              <WeatherForecast
                hour={hour}
                temperature={data.temperature}
                precip={data.precip}
                wind={data.wind}
                humidity={data.humidity}
                icon={data.icon}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal line */}
      <div className="horizontal-line"></div>

      {/* Seasonal Insights */}
      <h1 className="seasonal_text text-center">Seasonal Insights</h1>

      {/* Slider */}
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={selectedSeason === "Spring" ? "0" :
                 selectedSeason === "Summer" ? "33" :
                 selectedSeason === "Fall" ? "66" :
                 "100"} 
          onChange={handleSeasonChange}
          className="slider"
        />
        <div className="slider-labels">
          <div className="slider-label" style={{ left: "0%" }}>
            <span className={selectedSeason === "Spring" ? "bold-label" : ""}>Spring</span>
          </div>
          <div className="slider-label" style={{ left: "33%" }}>
            <span className={selectedSeason === "Summer" ? "bold-label" : ""}>Summer</span>
          </div>
          <div className="slider-label" style={{ left: "66%" }}>
            <span className={selectedSeason === "Fall" ? "bold-label" : ""}>Fall</span>
          </div>
          <div className="slider-label" style={{ left: "99%" }}>
            <span className={selectedSeason === "Winter" ? "bold-label" : ""}>Winter</span>
          </div>
        </div>
      </div>

      {/* Display plants for the selected season */}
      <div className="plants-container">
        {seasonalPlants.map((plant, index) => (
          <div className="plant-card" key={index}>
            <div className="plant-details">
              <img src={require(`../images/${plant.image}`)} alt={plant.name} />
              <h3>{plant.name}</h3>
            </div>
            <p className="plant-description">{seasonalInsights[selectedSeason][plant.name]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { SeasonInsights };
