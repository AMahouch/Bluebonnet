import React from 'react';
import '../styles/weather-forecast.css'; // Import the CSS file

const WeatherForecast = ({ hour, temperature, precip, wind, humidity, icon }) => {
  return (
    <div className="weather-forecast-card">
      <div className="weather-hour">{hour}</div>
      <div className="weather-icon">
        <img src={require(`../images/${icon}`)} alt="Weather Icon" />
      </div>
      <div className="weather-details">
        <div className="weather-temperature">{temperature}</div>
        <div className="weather-info">
          <span className="label">Precipitation: </span>
          <span className="value">{precip}</span>
        </div>
        <div className="weather-info">
          <span className="label">Wind: </span>
          <span className="value">{wind}</span>
        </div>
        <div className="weather-info">
          <span className="label">Humidity: </span>
          <span className="value">{humidity}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
