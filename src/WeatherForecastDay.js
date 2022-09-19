import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }
    return ( 
        <div>
        <div className="weatherDay">{day()}</div>
   <WeatherIcon code={props.data.weather[0].icon} size={30} />
   <div className="weatherTemperatures">
     <span className="weatherForecastMax">
       {Math.round(props.data.temp.max)}°
     </span>
     <span className="weatherForecastMin">
     {Math.round(props.data.temp.min)}°</span>
   </div>
   </div>
       
    );
}
WeatherForecastDay.propTypes = {
    data: PropTypes.object
  };
  