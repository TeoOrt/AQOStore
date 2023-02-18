import React, { useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
const SignUpUser = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [error, setError] = useState([]);

  const handleSignUp = async () => {
    try {
      await console.log(firebase.getApp());
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignUpUser;
