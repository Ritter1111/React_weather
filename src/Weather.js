import React, { useState } from "react";
// import WeatherSearch from "./WeatherSearch";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sky from './Sky.mp4';
import axios from "axios";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});
function HandleResponse(response) {
  console.log(response.data)
  setWeatherData({
    ready:true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    feelsLike: response.data.main.feels_like,
    description: response.data.weather[0].description
  });

}

if(weatherData.ready){
  return (

    <div className="Weather">
      <div className="row">
        <div className="col-8">
        <video autoPlay muted loop className='myVideo'>
    <source src={Sky} type="video/mp4" />
  </video>
          {/* <WeatherSearch /> */}
          <form >
     <input type="search" placeholder="Search city here..." className='city-in'/>
       <button type="Submit" className="btn-light">Search</button>
     </form>
        </div>
        <div className="col-4 right">
          <h2 className="font">
            <strong>Weather</strong>
          </h2>
          <h6></h6>
        </div>
      </div>

      <div className="row">
        <div className="col non">
          <br />
          <strong>
            <span className="degrees_left">
              <span className="degrees_left">{Math.round(weatherData.temperature)}</span>
              <a href="/" className="link link_2" value="hre">
                degC
              </a>
              <span className="stick">|</span>
              <a href="/" className="link">
                degF
              </a>
            </span>
          </strong>
          <br />
          <i className="fa-solid fa-cloud-bolt"></i>feels_like:
          {Math.round(weatherData.feelsLike)}
          <br />
          <span id="feelsLike">
         </span>deg
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
              <span className="block-degrees">{Math.round(weatherData.temperature)}</span>
              <span className="celsius">°C</span>
            </div>
          </div>
        </div>

        <div className="col">
          <p className="city">
            <i className="fa-solid fa-location-dot gold"></i>
            <span className="city-input">
            {weatherData.city}
            </span>
          </p>
          <span>{weatherData.city}</span>
          <br />
          <span>Tuesday, 20:00</span>
          <br />
          <button className="butn">Current Location</button>
        </div>
      </div>
    </div>
  );
}else{
  let apiKey = "1801b872861c58c5bdc4c9b616dce426";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(HandleResponse);
  
  return "Loading..."
}
}
