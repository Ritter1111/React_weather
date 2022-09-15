import React, { useState } from "react";
import PropTypes from "prop-types";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheite(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="degrees_left"> {Math.round(props.celsius)}</span>
        <span className="unit">
          C |{" "}
          <a
            href="/"
            className="link link_2"
            value="hre"
            onClick={convertToFahrenheite}
          >
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="degrees_left"> {Math.round(fahrenheit())}</span>
        <span className="unit">
          <a
            href="/"
            className="link link_2"
            value="hre"
            onClick={convertToCelsius}
          >
            C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
WeatherTemperature.propTypes = {
  celsius: PropTypes.number,
};
