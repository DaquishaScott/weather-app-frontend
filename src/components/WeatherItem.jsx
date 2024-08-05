import React from 'react';

const WeatherItem = ({ weather }) => {
  return (
    <div className="weather-item">
      <p>Date: {weather.date}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Description: {weather.description}</p>
    </div>
  );
};

export default WeatherItem;