import React from "react";
import { useState, useEffect } from "react";
import "./participants.css";
import { list } from "./data";

export default function Participants() {
  let data = [];
  const [pointer, setPointer] = useState([1, 7]);
  useEffect(() => {
    let timer = setTimeout(function () {
      let new_pointer = [
        pointer[0] + 1 > 23 ? (pointer[0] + 1) % 23 : pointer[0] + 1,
        pointer[1] + 1 > 23 ? (pointer[1] + 1) % 23 : pointer[1] + 1,
      ];
      setPointer(new_pointer);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });
  let start = pointer[0];
  let end = pointer[1];
  if (start < end) {
    for (let i = start; i <= end; ++i) {
      console.log(list[i - 1]);
      data.push(list[i - 1]);
    }
  } else {
    for (let i = start; i <= 23; ++i) {
      data.push(list[i - 1]);
    }
    for (let i = 1; i <= end; ++i) {
      data.push(list[i - 1]);
    }
  }
  console.log(data[0]);
  return (
    <div style={{ backgroundColor: "black" }}>
      <h1 className="participantsHead">Participants</h1>
      <div className="HomeParticipants">
        <div>
          {data.map((data_val) => {
            const { id, name, link } = data_val;
            return (
              <div
                key={id}
                style={{
                  backgroundImage: `url(${link})`,
                  backgroundPosition: "center",
                  backgroundSize: "75% 75%",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="participantsBorder"></div>
    </div>
  );
}
