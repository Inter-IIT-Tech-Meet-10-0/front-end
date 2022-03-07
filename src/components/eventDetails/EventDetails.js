import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./EventDetails.css";

// Problems Statements
import { BoschModelExtraction } from "./ProblemStatemens/ProblemStatement";
import {DigitalAlpha} from './ProblemStatemens/ProblemStatement';
import {SiliconLabs } from './ProblemStatemens/ProblemStatement';
import {BlueYonder} from './ProblemStatemens/ProblemStatement'

import {ISRO} from './MidPrepPS/MidPrepPS';
import {Mudrex} from './MidPrepPS/MidPrepPS'
import {Bosch} from './MidPrepPS/MidPrepPS';
import {DRDO} from './MidPrepPS/MidPrepPS'

function EventDetails() {
  const location = useLocation();
  console.log(location.state);
  const { name, image, } = location.state;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
          
        </div>
      </div>
    </div>
    {name ==="Bosch's Model Extraction Attack For Video Classification" && <BoschModelExtraction/> }
    {name ==="Digital Alpha's SEC Filing Analyzer for SaaS Companies" && <DigitalAlpha/> }
    {name ==="Silicon Labs' Social Entrepreneurship Challenge" && <SiliconLabs/> }
    {name ==="Blue Yonder’s Sustainable Supply-Chain" && <BlueYonder/> }
    {name ==="ISRO’s Web-Based Automatic Identification of Solar Bursts in X-RAY Light Curves" && <ISRO/> }
    {name ==="Mudrex's Alpha Trading Quest" && <Mudrex/> }
    {name ==="Bosch's Age And Gender Detection" && <Bosch/> }
    {name ==="DRDO's UAV-Guided UGV Navigation Challenge" && <DRDO/> }

    </>
  );
}

export default EventDetails;
