import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import React from "react";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather defaultCity="Sofia" />
     
    </div>
    <footer className="mycontact">
          This project was coded by {""}
          <a
            href="https://www.linkedin.com/in/angelina-liapin-3a5050211/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Angelina Liapin
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/Ritter1111/React_weather"
            rel="noopener noreferrer"
            target="_blank"
          >
            open-sourced
          </a>
        </footer>
  </StrictMode>
);
