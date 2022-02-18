import React from "react";
import Classes from "./WinnersTimeline.module.css";
import { list } from "./data";

function WinnersTimeline() {
  return (
    <>
      <div className={Classes.container}>
        <div className={Classes.timeline}>
          {list.map((keys) => {
            return <YearWinners {...keys} />;
          })}
        </div>
      </div>
    </>
  );
}

const YearWinners = (props) => {
  const { year, link1, link2, link3 } = props;
  return (
    <div className={Classes.winnersList}>
      <div className={Classes.year}>
        {Math.floor(year / 10)}
        <span className={Classes.gradient}>{year % 10}</span>
      </div>
      <div className={Classes.winnerBox}>
        <div
          className={Classes.imgbox}
          style={{
            backgroundColor: "white",
            backgroundImage: `url(${link1})`,
            backgroundPosition: "center",
            backgroundSize: "75% 75%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className={Classes.imgbox}
          style={{
            backgroundColor: "white",
            backgroundImage: `url(${link2})`,
            backgroundPosition: "center",
            backgroundSize: "75% 75%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img src="" alt="" /> */}
        </div>
        <div
          className={Classes.imgbox}
          style={{
            backgroundColor: "white",
            backgroundImage: `url(${link3})`,
            backgroundPosition: "center",
            backgroundSize: "75% 75%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default WinnersTimeline;
