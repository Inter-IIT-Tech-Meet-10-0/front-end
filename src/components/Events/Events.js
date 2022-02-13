import React from "react";
import CardLayout from "./components/cardLayout";
import "./Events.css";
import { list } from "./data.js";

export default function Events() {
  const { highPrep, mediumPrep, lowPrep } = list;
  return (
    <>
      <div className="eventHead">
        <h1 className="eventHeading">Events</h1>
        <h3
          style={{
            color: "white",
            textAlign: "center",
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
