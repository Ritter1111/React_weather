import React from "react";
import PropTypes from "prop-types";
import ReactAnimatedWeather from "react-animated-weather";
// import PropTypes from "prop-types";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGH",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "010d": "RAIN",
    "010n": "RAIN",
    "011d": "RAIN",
    "011n": "RAIN",
    "013d": "SNOW",
    "013n": "SNOW",
    "050d": "FOG",
    "050n": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="black"
      size={52}
      animate={true}
    />
  );
}
WeatherIcon.propTypes = {
  code: PropTypes.object
};
