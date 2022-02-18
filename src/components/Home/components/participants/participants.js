import React from "react";
import "./participants.css";
import { data } from "./data";

export default function Participants() {
  return (
    <div style={{ backgroundColor: "black", textAlign: "center" }}>
      <div className="participantsHead">PARTICIPANTS</div>
      <div className="HomeParticipants">
        <div className={"participantContainer"}>
          {data.map((data_val) => {
            const { id, link } = data_val;
            return (
              <div
                className="participantCard"
                key={id}
                style={{
                  backgroundImage: `url(${link})`,
                  backgroundPosition: "center",
                  backgroundSize: "75% 75%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <span class="tooltiptext">{data_val.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
