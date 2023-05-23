import React from "react";
import "./items.css";
import StoreItem from "./items";

function StoreGrid(props) {
  return (
    <div className="store-grid" id="Gallery">
      {props.items.map((item, index) => (
        <StoreItem
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
          style= {item.style}
        />
      ))}
    </div>
  );
}

export default StoreGrid;
