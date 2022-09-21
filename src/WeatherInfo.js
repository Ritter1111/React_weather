import React from "react";
import FormattedDate from "./FormattedDate";
import PropTypes from "prop-types";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {

  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col non">
          <br />
          <strong>
            <WeatherTemperature celsius={props.data.temperature} />
          </strong>
          <br />
          <i className="fa-solid fa-cloud-bolt"></i>feels_like:
          {Math.round(props.data.feelsLike)}
          <br />
          <span id="feelsLike"></span>deg
          <br />
          <i className="fa-solid fa-droplet"></i> humidity:
          {props.data.humidity}
          <br />
          <span id="humidity"></span>%<br />
          <i className="fa-solid fa-wind"></i>wind:{props.data.wind}
          <br />
          <span></span>km/h
        </div>

        <div className="col-6">
          <div className="Temp">
            <div className="block-temp">
              <div className="day"></div>
              <div className="block-weater">{props.data.description}</div>
              <span className="block-degrees">
                {Math.round(props.data.temperature)}
              </span>
              <span className="celsius">°C</span>
            </div>
          </div>
        </div>

        <div className="col">
          <p className="city">
            <i className="fa-solid fa-location-dot gold"></i>
            <span className="city-input">{props.data.city}</span>
          </p>
          <span>{props.data.city}</span>
          <br />
          <span>
            <FormattedDate date={props.data.date} />
          </span>
          <br />
    
       
        </div>
      </div>
    </div>
  );
}

WeatherInfo.propTypes = {
  data: PropTypes.object,
};
