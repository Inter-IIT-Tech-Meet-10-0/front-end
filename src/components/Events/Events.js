import React,{useState} from "react";
import Classes from "./Events.module.css";
import {FaLongArrowAltRight} from 'react-icons/fa';
import event1 from '../../images/event1.png';

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
      <div className={Classes.mainContainer}>
      {activeTab === 'low' && <LowPrep/>}
      {activeTab === 'mid' && <MidPrep/>}
      {activeTab === 'high' && <HighPrep/>}
      </div>
     

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
            <img src={event1} alt="Event Poster" className={Classes.imgbox}/>
           <div className={Classes.title}>Event Name</div>
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

