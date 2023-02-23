import React from "react";
import earings from "./earings.png";
import "./items.css";
import Jewlery from "./item_object";
const HomePage = () => {
  
  return (
    <table className="item-table">
      <thead>
        <tr>
          <th>Item1</th>
          <th>Item2</th>
          <th>Item3</th>
        </tr>
      </thead>
      <tbody>
    <Jewlery />
      </tbody>
    </table>
  );
};

export default HomePage;
