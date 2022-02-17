import React from "react";
import { useLocation } from "react-router-dom";
import "./EventDetails.css";

function EventDetails() {
  const location = useLocation();
  console.log(location.state);
  const { name } = location.state;

  return (
    <div className="eventSpecificDetailsTop">
      <div className="eventSpecificDetailsHeading">
        <span
          style={{
            color: "rgba(44, 190, 208, 1)",
          }}
        >
          {name.slice(0, -3)}
        </span>
        {name.slice(-3)}
      </div>
      <div className="eventSpecificDetails">
        <div className="eventSpecificDetailsContainer">
          <div className="eventSpecificDetailsContainerImage"></div>
          <div className="eventSpecificDetailsContainerData">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div>Register Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
