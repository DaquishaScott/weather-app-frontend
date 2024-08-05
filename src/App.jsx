import { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherList from './components/WeatherList';

function App() {
  const [weatherData, setWeatherData] = useState([null]);

  const addWeather = (newWeather) => {
    setWeatherData([...weatherData, newWeather]);
  };

  return (
    <div className="App">
      <h1>Weather Recording App</h1>
      <WeatherForm onAddWeather={addWeather} />
      <WeatherList weatherData={weatherData} />
    </div>
  );
}

export default App;
