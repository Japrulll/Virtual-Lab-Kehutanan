import "./Auth.css"; 
import React, { useState } from "react";
import bgImage from '../assets/bg-img-login.png';
import loglogo from '../assets/Logo-SITH-WHITE.png';
import Validation from "./RegisterValidation";

function Register({ onBack }) {
    const [values, setValues] = useState({
        name: '',
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
      }}>
      <div className="login">
        <img src={loglogo} alt="SITH Logo" className="login-logo" />
        <h2>Create an Account</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Name" name='name' 
            onChange={handleInput}/>
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" name='email'
            onChange={handleInput}/>
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" name='password'
            onChange={handleInput}/>
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button type='submit' className="btn-success">
            Register
          </button>
        </form>
      </div>
      <button className="back-btn" onClick={onBack}>
        ← Back to Login
      </button>
    </div>
  );
}

export default Register;
