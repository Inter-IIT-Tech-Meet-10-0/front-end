import React from "react";
import "./cardLayout.css";

export default function cardLayout(props) {
  const { brand, name, description } = props;
  return (
    <div className="cardLayout">
      <div className="cardLayoutTop">
        <div>
          <div>{brand}</div>
        </div>
        <div>
          <div>{name}</div>
        </div>
      </div>
      <div className="cardLayoutBottom">{description}</div>
    </div>
  );
}
