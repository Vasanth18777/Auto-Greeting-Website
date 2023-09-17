import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

const customStyle = {
  color: ""
};

let greeting;

if (currentTime < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
}
if (currentTime < 18) {
  greeting = "Good afternoon";
  customStyle.color = "Green";
}
if (currentTime < 24) {
  greeting = "Good evening";
  customStyle.color = "blue";
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      Hello, {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
