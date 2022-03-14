import React,{useState} from "react";
import Classes from "./Team.module.css";
import { data } from "./data";
import { BallTriangle } from "react-loader-spinner";

const Web = data["WEB"];
const Operations = data["OPERATIONS"];
const Design = data["DESIGN"];
const Sponsorship = data["SPONSORSHIP"];
const Overall = data["OVERALL"];

export default function Team() {
  return (
    <>
      <div className={Classes.mainContainer}>
        <div className={Classes.mainHeading}>
          <span className={Classes.firstWord}>TEA</span>M
        </div>

        {/* <div className={Classes.pstitle}>SPONSORSHIP</div>
        <div className={Classes.imagesContainer}>
          <Card name={"Parth Paradkar"} post={"Manager"} />
          <Card name={"Shrinish Vhanbatte"} post={"Associate Manager"} />
          <Card name={"Parth Paradkar"} post={"Manager"} />
          <Card name={"Parth Paradkar"} post={"Manager"} />
          <Card name={"Parth Paradkar"} post={"Manager"} />
          <Card name={"Parth Paradkar"} post={"Manager"} />
        </div> */}

        <SubTeam name="Overall Co-ordinators" data={Overall} />
        <SubTeam name="Sponsorship" data={Sponsorship} />
        <SubTeam name="Operations" data={Operations} />
        <SubTeam name="Web" data={Web} />
        <SubTeam name="Design" data={Design} />
      </div>
    </>
  );
}
const Card = (props) => {

  const [loading,setLoading] = useState(true);

  const { id, name, link, post } = props;
  return (
    <div className={Classes.CardContainer} key={id}>
      <div style={{display : loading ? 'block' :'none'}} className={Classes.loaderContainer}>
      <BallTriangle className={Classes.loader} color="#00BFFF" height={100} width={100} />
      </div>
      <div style={{display : loading ? 'none' :'block' }} className={Classes.imgbox}>
        <img onLoad={()=> setLoading(false)} src={link} alt="" className={Classes.img} />
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
