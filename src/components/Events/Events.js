import React,{useState} from "react";
import Classes from "./Events.module.css";
import {FaLongArrowAltRight} from 'react-icons/fa';
import event1 from '../../images/event1.png';
import event2 from '../../images/event2.png';

export default function Events() {

  const [activeTab,setActiveTab] = useState('low');

  return (
    <>
      <div className={Classes.mainHeading}>
       <span className={Classes.firstWord}>EVEN</span>TS 
      </div>
      
      <div className={Classes.navbarContainer}>
        <div className={Classes.navbar}>
        
        <div onClick={()=>setActiveTab('low')}  className={activeTab==='low' ? Classes.highlight : Classes.navItem}> LOW PREP</div>
        <div onClick={()=>setActiveTab('mid')} className={activeTab==='mid' ? Classes.highlight : Classes.navItem}>MID PREP</div>
        <div onClick={()=>setActiveTab('high')} className={activeTab==='high' ? Classes.highlight : Classes.navItem}>HIGH PREP</div>

        </div>
        
      </div>
      {activeTab === 'low' && <LowPrep/>}
      {activeTab === 'mid' && <MidPrep/>}
      {activeTab === 'high' && <HighPrep/>}

    </>
  );
}

const LowPrep =() =>{
  return (
    <>
   
      <div className={Classes.cardsContainer}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    
    </>
  )
}

const MidPrep = () =>{
  return (
     <>
      <div className={Classes.cardsContainer}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
     </>
  )
}

const HighPrep =() => {
  return (
     <>
      <div className={Classes.cardsContainer}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
     </>
  )
}


const Card =() =>{
  return (
    <>
     <div className={Classes.cardContainer}>
          <div className={Classes.imgbox}>
            <img src={event1} alt="Event Poster" className={Classes.imgbox}/>
          </div>
           <div className={Classes.title}>Event Name</div>
           <div className={Classes.readmore}>
             Read More 
           </div>
           <span className={Classes.iconContainer}> <FaLongArrowAltRight className={Classes.icon} size={30} color={'rgba(44, 190, 208, 1)'}/></span>
        </div>
    </>
  )
}
