import React,{useState} from "react";
import Classes from "./Events.module.css";
<<<<<<< HEAD
import {FaLongArrowAltRight} from 'react-icons/fa';
import { lowPrep,midPrep,highPrep } from "./data";
=======
import { Link } from "react-router-dom";
>>>>>>> fontUpdate

export default function Events() {

  const [activeTab,setActiveTab] = useState('low');

  return (
    <>
      <div className={Classes.mainHeading}>
        <span className={Classes.firstWord}>EVEN</span>TS
      </div>
<<<<<<< HEAD
      
      <div className={Classes.navbarContainer}>
        <div className={Classes.navbar}>
        
        <div onClick={()=>setActiveTab('low')}  className={activeTab==='low' ? Classes.highlight : Classes.navItem}> LOW PREP</div>
        <div onClick={()=>setActiveTab('mid')} className={activeTab==='mid' ? Classes.highlight : Classes.navItem}>MID PREP</div>
        <div onClick={()=>setActiveTab('high')} className={activeTab==='high' ? Classes.highlight : Classes.navItem}>HIGH PREP</div>

        </div>
        
      </div>
      <div className={Classes.mainContainer}>
      {activeTab === 'low' && <LowPrep/>}
      {activeTab === 'mid' && <MidPrep/>}
      {activeTab === 'high' && <HighPrep/>}
      </div>
     
=======
>>>>>>> fontUpdate

      <div className={Classes.container}>
        <Prep type={"high"} />
        <Prep type={"mid"} />
        <Prep type={"low"} />
      </div>
    </>
  );
}

<<<<<<< HEAD
const LowPrep =() =>{
  return (
    <>
   
      <div className={Classes.cardsContainer}>
        {lowPrep.map(event =>{
          return <Card event = {event}/>
        })}
=======
const Prep = ({ type }) => {
  return (
    <>
      <div
        className={
          type === "high"
            ? Classes.mainContainerHigh
            : type === "mid"
            ? Classes.mainContainerMid
            : Classes.mainContainerLow
        }
      >
        <div
          className={
            type === "high"
              ? Classes.prepHeadingHigh
              : type === "mid"
              ? Classes.prepHeadingMid
              : Classes.prepHeadingLow
          }
        >
          {type === "high" && "HIGH PREP"}
          {type === "mid" && "MID PREP"}
          {type === "low" && "LOW PREP"}
        </div>
        <div className={Classes.cardsContainer}>
          <Card />
          <Card />
        </div>
>>>>>>> fontUpdate
      </div>
    
    </>
  );
};

<<<<<<< HEAD
const MidPrep = () =>{
  return (
     <>
      <div className={Classes.cardsContainer}>
      {midPrep.map(event =>{
          return <Card event = {event}/>
        })}
      </div>
     </>
  )
}

const HighPrep =() => {
  return (
     <>
      <div className={Classes.cardsContainer}>
      {highPrep.map(event =>{
          return <Card event = {event}/>
        })}
      </div>
     </>
  )
}


const Card =({event}) =>{
  return (
    <>
     <div className={Classes.cardContainer}>
            <img src={event.image} alt="Event Poster" className={Classes.imgbox}/>
           <div className={Classes.title}>{event.name}</div>
           <div className={Classes.readMoreContainer}>
           <div className={Classes.readmore}>
             Read More 
           </div>
           <div className={Classes.iconContainer}> <FaLongArrowAltRight  size={30} color={'rgba(44, 190, 208, 1)'}/></div>
           </div>
         
        </div>
    </>
  )
}

=======
const Card = () => {
  return (
    <>
      <div className={Classes.cardContainer}>
        <div className={Classes.brandContainer}>
          <div className={Classes.logoName}>
            Logo/Brand Name(Centre aligned)
          </div>
          <div className={Classes.eventName}>Event Name(left Aligned)</div>
        </div>
        <div className={Classes.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <Link
          to={`/events/eventName`}
          state={{ imgUrl: "a", name: "b", description: "c", pageLink: "d" }}
        >
          click
        </Link>
      </div>
    </>
  );
};
>>>>>>> fontUpdate
