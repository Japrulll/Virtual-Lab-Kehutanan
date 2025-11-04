import React from "react";
import "./SplashScreen.css";
import logo from "../assets/Logo-SITH-WHITE-ONLY.png";

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <img src={logo} alt="Logo SITH" className="splash-logo" />
      <h1 className="splash-text">Laboratorium Alam</h1>
    </div>
  );
};

export default SplashScreen;
