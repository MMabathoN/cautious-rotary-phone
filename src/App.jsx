import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchForm from "./SearchForm";
import WeatherDisplay from "./WeatherDisplay";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track any errors

  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your actual key

  const handleSubmit = async (query) => {
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const weather = {
        city: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
      };
      setWeatherData([weather]);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message); // Set error message for display
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success/failure
    }
  };

  return (
    <div className="App">
      <h1>Weather Search</h1>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <p>Loading weather data...</p>}
      {error && <p className="error-message">Error: {error}</p>}
      <WeatherDisplay weatherData={weatherData} />
      <p>
      <p></p>
      <button>
    <a herf="https://github.com/MMabathoN/cautious-rotary-phone"> Repo-link </a>
   </button>
   </p>
    </div>
  );
}

export default App;
