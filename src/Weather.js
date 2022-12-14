import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.min.css";
import Sky from "./Sky.mp4";
import axios from "axios";
import PropTypes from "prop-types";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function HandleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      feelsLike: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description
    });
  }

  function search() {
    let apiKey = "1801b872861c58c5bdc4c9b616dce426";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function askLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(cityLocation);
  }
  function cityLocation(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const apiKey = "1801b872861c58c5bdc4c9b616dce426";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(HandleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-8">
            <video autoPlay muted loop className="myVideo">
              <source src={Sky} type="video/mp4" />
            </video>
            {/* <WeatherSearch /> */}
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search city here..."
                className="city-in"
                onChange={handleCityChange}
              />
              <button type="Submit" className="btn-light">
                Search
              </button>
            </form>
          </div>
          <div className="col-4 right">
            <button className="butn"   onClick={askLocation}>Current location</button>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast
          coordinates={weatherData.coordinates}
          data={weatherData}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
Weather.propTypes = {
  defaultCity: PropTypes.string,
};
