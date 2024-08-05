import React, { useState } from 'react';

const WeatherForm = ({ onAddWeather }) => {
  const [weatherData, setWeatherData] = useState({
    date: '',
    temperature: '',
    humidity: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWeatherData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWeather(weatherData);
    setWeatherData({
      date: '',
      temperature: '',
      humidity: '',
      description: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={weatherData.date}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="temperature"
        value={weatherData.temperature}
        onChange={handleChange}
        placeholder="Temperature (°C)"
        required
      />
      <input
        type="number"
        name="humidity"
        value={weatherData.humidity}
        onChange={handleChange}
        placeholder="Humidity (%)"
        required
      />
      <input
        type="text"
        name="description"
        value={weatherData.description}
        onChange={handleChange}
        placeholder="Weather description"
        required
      />
      <button type="submit">Add Weather Data</button>
    </form>
  );
};

export default WeatherForm;