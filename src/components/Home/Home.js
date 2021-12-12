import React from "react";
import AboutInteriit from "./components/about_interiit/about_interiit";
import Countdown from "./components/countdown/countdown";
import EventTimeline from "./components/event_timeline/event_timeline";
import Hero from "./components/hero/hero";
import LatestUpdates from "./components/latest_updates/latest_updates";
import Participants from "./components/participants/participants";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Countdown />
      <EventTimeline />
      <LatestUpdates />
      <AboutInteriit />
      <Participants />
    </React.Fragment>
  );
}
