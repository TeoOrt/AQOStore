import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./NavBar/NavBar";
import Intro from "./Intro/intro";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
};

export default App;
