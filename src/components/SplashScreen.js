import React from "react";
import "./SplashScreen.css";
import logo from "../assets/Logo-SITH-WHITE.png";

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <img src={logo} alt="Logo SITH" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
