import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import UserLogin from "./UserLogin/Login";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Home";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<UserLogin />} />
      </Routes>
    </div>
  );
};

export default App;
