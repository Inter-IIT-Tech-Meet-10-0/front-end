import React from "react";
import Classes from './Team.module.css';
import Demo from '../../images/teamDemo.jfif';

export default function Team() {
  return (<>
   <div className={Classes.mainContainer}>
        <div className={Classes.mainHeading}>
            <span className={Classes.firstWord}>TEA</span>M
        </div>
        <div className={Classes.pstitle}>
          SPONSORSHIP
        </div>
        <div className={Classes.imagesContainer}>
          <Card name={'Parth Paradkar'} post={'Manager'}/>
          <Card name={'Shrinish Vhanbatte'} post={'Associate Manager'}/>
          <Card name={'Parth Paradkar'} post={'Manager'}/>
          <Card name={'Parth Paradkar'} post={'Manager'}/>
          <Card name={'Parth Paradkar'} post={'Manager'}/>
          <Card name={'Parth Paradkar'} post={'Manager'}/>
         
        </div>
        <div className={Classes.pstitle}>
          OPERATIONS
        </div>
        <div className={Classes.pstitle}>
          DESIGN
        </div>
        <div className={Classes.pstitle}>
          WEB
        </div>
   </div>


   

  </>);
}

const Card =({name,post}) => {
  return (
    <div className={Classes.CardContainer}>
    <div className={Classes.imgbox}><img src={Demo} alt="" className={Classes.img} /></div>
    <div className={Classes.name}>{name}</div>
    <div className={Classes.position}>{post}</div>
    </div>
  )
}