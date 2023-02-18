import React from "react";
import logo from "../NavBar/AQOLOGO.svg";
import Login_styles from "./LoginStyles";
const UserLogin = () => {
  return (
    <div style={Login_styles.container}>
      <img src={logo} alt="Logo" style={Login_styles.logo} />
      <h1 style={Login_styles.logo_letter}>AQO Store</h1>
      <form style={Login_styles.form}>
        <h2 style={Login_styles.login_title}>Login Babes</h2>
        <input type="text" placeholder="Username" style={Login_styles.input} />
        <input
          type="password"
          placeholder="Password"
          style={Login_styles.input}
        />
        <button type="submit" style={Login_styles.button}>
          Login with Google
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
