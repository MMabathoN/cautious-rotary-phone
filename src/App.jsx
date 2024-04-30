import React, { useState } from "react";
import "./styles.css";
import SearchForm from "./SearchForm";
import WeatherDisplay from "./WeatherDisplay";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  const handleSubmit = async (query) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=25324be609828c6f9afbdcede01115a5&units=metric`
      );
      const data = await response.json();
      const weather = {
        city: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
      };
      setWeatherData([weather]);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  return (
    <div className="App">
      <h1>Weather Search</h1>
      <SearchForm onSubmit={handleSubmit} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;
