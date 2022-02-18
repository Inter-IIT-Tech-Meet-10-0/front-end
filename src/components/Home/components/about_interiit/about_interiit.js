import React from "react";
import "./about_interiit.css";
import logo from "./logo_1.png";

export default function AboutInteriit() {
  return (
    <div className="AboutInterIIT">
      <div>
        <img
          className="AboutInterIITlogo"
          src={logo}
          alt="INTER IIT LOGO"
          width="250px"
          height="220px"
        />
      </div>
      <div className="ChildAboutInterIIT">
        <div>
          <h1 style={{ textAlign: "center", fontWeight: "400" }}>
            To Newer Horizons: In the Wake of the Pandemic
          </h1>
          {/* <h1 style={{ textAlign: "center" }}>In the Wake of the Pandemic</h1> */}
        </div>
        <div>
          <br />
          The theme of the Inter IIT Tech Meet 10.0 is to showcase the
          post-COVID-19 era, which paved the way for newer horizons in the
          sphere of digital transformation, and spurred changes in our
          fundamental lifestyle. <br />
          <br />
          "To Newer Horizons: In the Wake of the Pandemic" highlights how
          digitization is set out to take a new trajectory as we ideate our
          imaginations into reality through brainstorming and innovation.
        </div>
      </div>
    </div>
  );
}
