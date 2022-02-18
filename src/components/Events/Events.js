import React, { useState, useEffect } from "react";
import Classes from "./Events.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { lowPrep, midPrep, highPrep } from "./data";
import { Link } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

export default function Events() {
  const [activeTab, setActiveTab] = useState("low");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={Classes.mainHeading}>
        <span className={Classes.firstWord}>EVEN</span>TS
      </div>

      <div className={Classes.navbarContainer}>
        <div className={Classes.navbar}>
          <div
            onClick={() => setActiveTab("low")}
            className={
              activeTab === "low" ? Classes.highlight : Classes.navItem
            }
          >
            {" "}
            LOW PREP
          </div>
          <div
            onClick={() => setActiveTab("mid")}
            className={
              activeTab === "mid" ? Classes.highlight : Classes.navItem
            }
          >
            MID PREP
          </div>
          <div
            onClick={() => setActiveTab("high")}
            className={
              activeTab === "high" ? Classes.highlight : Classes.navItem
            }
          >
            HIGH PREP
          </div>
        </div>
      </div>
      <div className={Classes.mainContainer}>
        {activeTab === "low" && <LowPrep />}
        {activeTab === "mid" && <MidPrep />}
        {activeTab === "high" && <HighPrep />}
      </div>

      {/* <div className={Classes.container}>
        <Prep type={"high"} />
        <Prep type={"mid"} />
        <Prep type={"low"} />
      </div> */}
    </>
  );
}

const LowPrep = () => {
  return (
    <>
      {Object.keys(lowPrep).length === 0 ? (
        <ReleasingSoon />
      ) : (
        <div className={Classes.cardsContainer}>
          {lowPrep.map((event) => {
            return <Card event={event} />;
          })}
        </div>
      )}
    </>
  );
};

const MidPrep = () => {
  return (
    <>
      <div className={Classes.cardsContainer}>
        {midPrep.map((event) => {
          return <Card event={event} />;
        })}
      </div>
    </>
  );
};

const HighPrep = () => {
  return (
    <>
      <div className={Classes.cardsContainer}>
        {highPrep.map((event) => {
          return <Card event={event} />;
        })}
      </div>
    </>
  );
};

const Card = ({ event }) => {
  const [loading, setLoading] = useState(true);

  const { name } = event;
  return (
    <>
      <div className={Classes.cardContainer}>
        <div
          className={Classes.loaderContainer}
          style={{ display: loading ? "block" :'none' }}
        >
          <BallTriangle className={Classes.loader} color="#00BFFF" height={100} width={100} />
        </div>
        <div style={{ display: loading ? "none" : "block" }}>
          <img
            src={event.image}
            onLoad={() => setLoading(false)}
            alt="Event Poster"
            className={Classes.imgbox}
          />
        </div>

        <div className={Classes.title}>{event.name}</div>
        <div className={Classes.readMoreContainer}>
          {name !== "Blue Yonder" ? (
            <>
              <Link to={`/events/${name}`} state={event}>
                <div className={Classes.readmore}>Read More</div>
              </Link>
              <div className={Classes.iconContainer}>
                {" "}
                <FaLongArrowAltRight
                  size={30}
                  color={"rgba(44, 190, 208, 1)"}
                />
              </div>
            </>
          ) : (
            <div className={Classes.readmore}>Coming Soon</div>
          )}
        </div>
      </div>
    </>
  );
};

const ReleasingSoon = () => {
  return (
    <div>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          paddingBottom: "80px",
        }}
      >
        Coming Soon
      </h1>
    </div>
  );
};
