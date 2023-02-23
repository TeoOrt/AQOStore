import React from "react";
import "./items.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Test_Items = () => {
  const [Res, setRes] = useState([{}]);
  useEffect(() => {
    setRes([{ hello: "world" }]);
    console.log(Res);
  }, []);
  return (
    <div>
      <p>Test Test Test</p>
    </div>
  );
};

export default Test_Items;
