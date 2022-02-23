import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./EventDetails.css";

function EventDetails() {
  const location = useLocation();
  console.log(location.state);
  const { name, description, image, maxsize, link } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              backgroundSize: "100%",
              objectFit:'cover',
              backgroundRepeat:'no-repeat'
            }}
          ></div>
          <div className="eventSpecificDetailsContainerData">
            <div>
              {description}
              <br />
              <br />
              Maximum Team Size : {maxsize}
            </div>
            {link !== "/" && (
              <div>
                <a
                  href={link}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Problem Statement
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
