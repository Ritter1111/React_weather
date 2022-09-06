import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    humidity: 80,
    wind: 10,
    feels_like: 12
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-8">
          {/* <form>
            <input type="search" placeholder="Search city here.." />
            <input type="submit" value="Search" className="btn btn-light" />
          </form> */}
          <WeatherSearch />
        </div>
        <div className="col-4 right">
          <h2 className="font">
            <strong>Weather</strong>
          </h2>
          <h6>{weatherData.date}</h6>
        </div>
      </div>

      <div className="row">
        <div className="col non">
          <br />
          <strong>
            <span className="degrees_left">
              <span className="degrees_left">{weatherData.temperature}</span>
              <a href="/" className="link link_2" value="hre">
                &degC
              </a>
              <span className="stick">|</span>
              <a href="/" className="link">
                &degF
              </a>
            </span>
          </strong>
          <br />
          <i className="fa-solid fa-cloud-bolt"></i>feels_like:
          {weatherData.feels_like}
          <br />
          <span id="feelsLike"></span>&deg
          <br />
          <i className="fa-solid fa-droplet"></i> humidity:
          {weatherData.humidity}
          <br />
          <span id="humidity"></span>%<br />
          <i className="fa-solid fa-wind"></i>wind:{weatherData.wind}
          <br />
          <span></span>km/h
        </div>

        <div className="col-6">
          <div className="Temp">
            <div className="block-temp">
              <div className="day"></div>
              <div className="block-weater">{weatherData.description}</div>
              <span className="block-degrees">{weatherData.temperature}</span>
              <span className="celsius">°C</span>
            </div>
          </div>
        </div>

        <div className="col">
          <p className="city">
            <i className="fa-solid fa-location-dot gold"></i>
            <span>{weatherData.city}</span>
          </p>
          <span>{weatherData.date}</span>
          <br />
          <span>{weatherData.description}</span>
          <br />
          <button className="butn">Current Location</button>
        </div>
      </div>
    </div>
  );
}
