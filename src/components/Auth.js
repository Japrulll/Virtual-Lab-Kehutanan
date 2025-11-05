import React, { useState } from "react";
import "./Auth.css";
import bgImage from '../assets/bg-img-login.png';
import loglogo from '../assets/Logo-SITH-WHITE.png';
import Validation from "./LoginValidation";

function Auth({ onBack, onRegister }) {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `linear-gradient(rgba(67,171,159,0.85), rgba(102,189,168,0.85)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="login">
        <img src={loglogo} alt="SITH Logo" className="login-logo" />
        <h2>Welcome Back!</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" 
            onChange={handleInput}/>
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password"
            onChange={handleInput}/>
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button type="submit" className="btn-success">Log in</button>
           <button
            type="button"
            className="btn-default"
            onClick={onRegister}
          >
            Create Account
          </button>
        </form>
      </div>
      <button className="back-btn" onClick={onBack}>← Kembali</button>
    </div>
  );
}

export default Auth;
