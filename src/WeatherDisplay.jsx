import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="weather-display">
      {weatherData.map((weather, index) => (
        <WeatherCard key={index} weather={weather} />
      ))}
    </div>
  );
};

export default WeatherDisplay;
