import React from "react";
 import "./style.css";
import AQOLogo from "../../NavBar/AQOLOGO.svg"
 const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="logo-container">
        <a href="/" className="logo-container-anchor">
        <img src={AQOLogo} alt="Logo" className="logo" />
        </a>
      </div>
      {children}
    </div>
  );
};

const Heading = ({ children }) => {
  return <h1 className="heading">{children}</h1>;
};

const Input = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className="input" />;
};

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

export { Container, Heading, Input, Button };
