import React from "react";
function StoreItem(props) {
  return (
    <div className="store-item">
      <img src={props.image} alt={props.name} />
      <h2>{props.name} {props.style}</h2>
      <p>{props.price}</p>

    </div>
  );
}

export default StoreItem;
