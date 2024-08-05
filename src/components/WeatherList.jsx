import React from 'react';
import WeatherItem from './WeatherItem';

const WeatherList = ({ weatherData }) => {
  return (
    <div className="weather-list">
      <h2>Weather Records</h2>
      {weatherData.map((weather, index) => (
        <WeatherItem key={index} weather={weather} />
      ))}
    </div>
  );
};

export default WeatherList;