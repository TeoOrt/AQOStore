import React from "react";
import "./items.css";
import StoreItem from "./items";

function StoreGrid(props) {
  return (
    <div className="store-grid">
      {props.items.map((item, index) => (
        <StoreItem
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default StoreGrid;
