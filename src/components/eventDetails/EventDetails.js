import React from "react";
import { useLocation } from "react-router-dom";
import "./EventDetails.css";

function EventDetails() {
  const location = useLocation();
  console.log(location.state);
  const { name, description, image, maxsize } = location.state;

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
          <div
            className="eventSpecificDetailsContainerImage"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="eventSpecificDetailsContainerData">
            <div>
              {description}
              <br />
              <br />
              Maximum Size : {maxsize}
            </div>
            {/* <div>Register Now</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
