import React from "react";
import Classes from "./Events.module.css";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <>
      <div className={Classes.mainHeading}>
        <span className={Classes.firstWord}>EVEN</span>TS
      </div>

      <div className={Classes.container}>
        <Prep type={"high"} />
        <Prep type={"mid"} />
        <Prep type={"low"} />
      </div>
    </>
  );
}

const Prep = ({ type }) => {
  return (
    <>
      <div
        className={
          type === "high"
            ? Classes.mainContainerHigh
            : type === "mid"
            ? Classes.mainContainerMid
            : Classes.mainContainerLow
        }
      >
        <div
          className={
            type === "high"
              ? Classes.prepHeadingHigh
              : type === "mid"
              ? Classes.prepHeadingMid
              : Classes.prepHeadingLow
          }
        >
          {type === "high" && "HIGH PREP"}
          {type === "mid" && "MID PREP"}
          {type === "low" && "LOW PREP"}
        </div>
        <div className={Classes.cardsContainer}>
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <>
      <div className={Classes.cardContainer}>
        <div className={Classes.brandContainer}>
          <div className={Classes.logoName}>
            Logo/Brand Name(Centre aligned)
          </div>
          <div className={Classes.eventName}>Event Name(left Aligned)</div>
        </div>
        <div className={Classes.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <Link
          to={`/events/eventName`}
          state={{ imgUrl: "a", name: "b", description: "c", pageLink: "d" }}
        >
          click
        </Link>
      </div>
    </>
  );
};
