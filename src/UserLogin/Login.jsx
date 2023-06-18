import React from "react";
import logo from "../NavBar/AQOLOGO.svg";
import Login_styles from "./LoginStyles";
import axios from "axios";
import { useState } from "react";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "../Home";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };

    try {
      const response = await axios
        .post("/api/Login", data)
        .then((res) => {
          const response = res.data.message;
          response === "LoginSucces"
            ? window.location.replace("/LoggedHome")
            : console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={Login_styles.container}>
      <a href="/" style={Login_styles.a}>
        <img src={logo} alt="Logo" style={Login_styles.logo} />
        <h1 style={Login_styles.logo_letter}>AQO Store</h1>
      </a>
      <form onSubmit={handleSubmit} style={Login_styles.form}>
        <h2 style={Login_styles.login_title}>User Login </h2>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          style={Login_styles.input}
        />
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          style={Login_styles.input}
        />
        <button type="submit" style={Login_styles.button}>
          Login
        </button>
        <a href="/Login/SignUp" style={Login_styles.a_Login}>
          Create User
        </a>
      </form>

      <div style={Login_styles.footer}>
        <p>Copyright © AQO Store 2023</p>
      </div>
    </div>
  );
};

export default UserLogin;
