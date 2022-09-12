import React from "react";

export default function FormattedDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[this.props.date.getDay()];
  let hours = this.props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = this.props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {" "}
      {day} {hours}: {minutes}{" "}
    </div>
  );
}
