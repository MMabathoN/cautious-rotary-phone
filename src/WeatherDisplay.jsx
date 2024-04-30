import React from "react";
import Card from "react-bootstrap/Card";

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="weather-display">
      {weatherData.map((weather, index) => (
        <Card key={index} style={{ width: "18rem", margin: "20px" }}>
          <Card.Body>
            <Card.Title>{weather.city}</Card.Title>
            <Card.Text>
              Temperature: {weather.temp}°C
              <br />
              Humidity: {weather.humidity}%
              <br />
              Description: {weather.description}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default WeatherDisplay;
