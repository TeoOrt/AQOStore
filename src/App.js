import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Escape from "./Escape.svg";
import Navbar from "./NavBar";
import Intro from "./intro";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
};

export default App;
