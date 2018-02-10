import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Header = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-title">
          <button onClick={props.getImage}>Change Image!</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
