import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(){
    return (
        <div className="WeatherInfo">
    <div className="row">
    <div className="col non">
      <br />
      <strong>
        <span className="degrees_left">
          <span className="degrees_left">{Math.round(this.props.data.temperature)}</span>
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
      {Math.round(this.props.data.feelsLike)}
      <br />
      <span id="feelsLike">
     </span>deg
      <br />
      <i className="fa-solid fa-droplet"></i> humidity:
    {this.props.data.humidity}
      <br />
      <span id="humidity"></span>%<br />
      <i className="fa-solid fa-wind"></i>wind:{this.props.data.wind}
      <br />
      <span></span>km/h
    </div>

    <div className="col-6">
      <div className="Temp">
        <div className="block-temp">
          <div className="day"></div>
          <div className="block-weater">{this.props.data.description}</div>
          <span className="block-degrees">{Math.round(this.props.data.temperature)}</span>
          <span className="celsius">°C</span>
        </div>
      </div>
    </div>

    <div className="col">
      <p className="city">
        <i className="fa-solid fa-location-dot gold"></i>
        <span className="city-input">
        {this.props.data.city}
        </span>
      </p>
      <span>{this.props.data.city}</span>
      <br />
      <span>
        <FormattedDate date={this.props.data.date}/>
      </span>
      <br />
      <button className="butn">Current Location</button>
    </div>
  </div>
  </div>
    );
}