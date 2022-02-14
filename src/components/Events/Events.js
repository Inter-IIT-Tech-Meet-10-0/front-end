import React from "react";
import CardLayout from "./components/cardLayout";
import "./Events.css";
import { list } from "./data.js";

export default function Events() {
  const { highPrep, mediumPrep, lowPrep } = list;
  return (
    <>
      <div className="eventHead">
        <h1 className="eventHeading">EVENTS</h1>
        <h3
          style={{
            color: "white",
            textAlign: "center",
            fontSize:"2.5rem",
            fontWeight:400,
          }}
        >
          HIGH PREP
        </h3>
        <div className="eventBody">
          {highPrep.map((event) => {
            const { id, brand, name, description } = event;
            return (
              <CardLayout
                key={id}
                name={name}
                brand={brand}
                description={description}
              />
            );
          })}
        </div>
        <h3
          style={{
            color: "white",
            textAlign: "center",
            fontSize:"2.5rem",
            fontWeight:400,
          }}
        >
          MID PREP
        </h3>
        <div className="eventBody">
          {mediumPrep.map((event) => {
            const { id, brand, name, description } = event;
            return (
              <CardLayout
                key={id}
                name={name}
                brand={brand}
                description={description}
              />
            );
          })}
        </div>
        <h3
          style={{
            color: "white",
            textAlign: "center",
            fontSize:"2.5rem",
            fontWeight:400,
          }}
        >
          LOW PREP
        </h3>
        <div className="eventBody">
          {lowPrep.map((event) => {
            const { id, brand, name, description } = event;
            return (
              <CardLayout
                key={id}
                name={name}
                brand={brand}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
