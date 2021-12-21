import React from "react";
import { useState, useEffect } from "react";
import "./latest_updates.css";
import { list } from "./data.js";

export default function LatestUpdates() {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    let timer = setTimeout(function () {
      setIndex(index < 7 ? index + 1 : 1);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });
  console.log(list[index - 1]);
  return (
    <div style={{ backgroundColor: "black" }}>
      <h1 className="latestUpdatesHeading">Latest Updates</h1>
      <div>
        <div key={index} className="latestUpdates">
          <div>
            <img
              className="latestUpdatesImages"
              src={list[index - 1].link}
              alt=""
            />
          </div>
          <div>
            <h2>{list[index - 1].head}</h2>
            <h5 className="latestUpdatesSubText">{list[index - 1].text}</h5>
            <p>{list[index - 1].subtext}</p>
          </div>
        </div>
        <div
          className="latestUpdatesFotter"
        >
          {list.map((Index) => {
            const { id, link } = Index;
            console.log(id, index);
            return (
              <div
                key={id}
                className={id == index ? "active" : "not_active"}
                style={{
                  backgroundImage: `url(${link})`,
                  backgroundSize: "cover",
                }}
                onClick={() => {
                  setIndex(Number(id));
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
