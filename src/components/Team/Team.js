import React from "react";
import Classes from "./Team.module.css";
import { data } from "./data";
const OverallCoordinators = data["OverallCoordinators"];
const Web = data["WEB"];
const Operations = data["OPERATIONS"];
const Design = data["DESIGN"];
const Sponsorship = data["SPONSORSHIP"];
export default function Team() {
  return (
    <>
      <div className={Classes.mainContainer}>
        <div className={Classes.mainHeading}>
          <span className={Classes.firstWord}>TEA</span>M
        </div>

        <SubTeam name="Overall-Coordinators" data={OverallCoordinators} />
        <SubTeam name="Sponsorship" data={Sponsorship} />
        <SubTeam name="Operations" data={Operations} />
        <SubTeam name="Web" data={Web} />
        <SubTeam name="Design" data={Design} />
      </div>
    </>
  );
}
const Card = (props) => {
  const { id, name, post, link } = props;
  return (
    <div className={Classes.CardContainer} key={id}>
      <div className={Classes.imgbox}>
        <img src={link} alt="" className={Classes.img} />
      </div>
      <div className={Classes.name}>{name}</div>
      <div className={Classes.position}>{post}</div>
    </div>
  );
};

const SubTeam = (props) => {
  const { name, data } = props;
  return (
    <>
      <div className={Classes.pstitle}>{name}</div>
      <div className={Classes.imagesContainer}>
        {data.map((person) => {
          return <Card {...person} />;
        })}
      </div>
    </>
  );
};
