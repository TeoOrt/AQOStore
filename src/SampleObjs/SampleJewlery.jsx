import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import StoreItem from "../Items/items";
import StoreGrid from "../Items/columns";
const DisplayTest = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    axios
      .get("/image-gallery")
      .then((res) => setTest(res.data))
      .catch((e) => console.error(e));

    console.log(test);
  }, [2]);
  return (
    <div>
      <h1>This is a test enviroment</h1>

      <StoreGrid items={test} />
    </div>
  );
};

export default DisplayTest;
