import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  if (loaded) {
    let apiKey = "c119ffef35b7245a5e03b6e5724ae961";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col l-tt">
            <div className="weatherDay">Thu</div>
            <WeatherIcon code={props.data.icon} />
            <div className="weatherTemperatures">
              <span className="weatherForecastMax">19°</span>
              <span className="weatherForecastMin">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
WeatherForecast.propTypes = {
  data: PropTypes.object,
  coordinates: PropTypes.object,
};
