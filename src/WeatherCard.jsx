import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <p>{weather.description}</p>
      <p>Temperature: {weather.temp}°C</p>
      <p>Humidity: {weather.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
