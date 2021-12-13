import React from "react";
import Classes from "./hero.module.css";
import logo from "../../../../images/logo.png";
export default function Hero() {
  return (
    <div className={Classes.background}>
      <div className={Classes.centerContainer}>
        <img className={Classes.logo} src={logo} alt="logo" />
        <span className={Classes.title}> INTER IIT TECH-MEET 10.0</span>
        <span className={Classes.text}> COMING SOON</span>
        <span className={Classes.subtitle}> 10 - 15 Jan | IIT Kharagpur</span>
      </div>
    </div>
  );
}
