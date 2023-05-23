import React from "react";
import axios from "axios";
import { useState } from "react";
import { Container, Heading } from "./stylecomponets.jsx";
import AQOLogo from "../../NavBar/AQOLOGO.svg";
import "./style.css";
const SignUp = () => {
  //react hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [showForm, setShowForm] = useState(false);

  //prevent submint being empty
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const data = {
      email,
      username,
      password,
      address,
    };
    formData.append("data", JSON.stringify(data));
    try {
      const response = await axios.post("/users", data);
      console.log(response.formData);
    } catch (err) {
      console.log(err);
    }
  };
  const handleFormMount = () => {
    setShowForm(true);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} onMount={handleFormMount}>
        <Heading>AQO Store</Heading>
        <h2>Create User</h2>
        <input
          className="input"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Full Name"
        />
        <input
          className="input"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
        />
        <input
          className="input"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input
          className="input"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="addres"
          placeholder="Current Address"
        />
        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
    </Container>
  );
};

export default SignUp;
