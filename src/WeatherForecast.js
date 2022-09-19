import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 7) {
              return (
                <div className="col l-tt" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }else{
                return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "c119ffef35b7245a5e03b6e5724ae961";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
WeatherForecast.propTypes = {
  data: PropTypes.object,
  coordinates: PropTypes.object,
};
