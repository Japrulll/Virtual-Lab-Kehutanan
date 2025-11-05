import React from "react";
import "./Navbar.css";
import logo from "../assets/Logo-SITH-WHITE.png"; // nanti kamu ganti pakai logo kamu
import user_logo from "../assets/user-icon.png";

function Navbar({ onUserClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="SITH Logo" className="navbar-logo" />
      </div>

      <ul className="navbar-menu">
        <li><a href="#about">Tentang Kami</a></li>
        <li><a href="#praktikum">Praktikum</a></li>
        <li><a href="#jurnal">Jurnal</a></li>
      </ul>

      <div className="navbar-right">
        <img src={user_logo} alt="user Logo" className="user-icon" 
        onClick={onUserClick} 
        style={{ cursor: "pointer" }}/>
      </div>
    </nav>
  );
}

export default Navbar;
