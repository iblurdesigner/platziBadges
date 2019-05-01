// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

// const element = (
//   <div>
//     <h1>Hola, soy David</h1>
//     <p>Soy ingeniero frontend.</p>
//   </div>
// );

import App from "./components/App";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
//ReactDOM.render(<Badge />, container);
ReactDOM.render(<App />, container);
