import React from 'react'
import Classes from './Sponsors.module.css';

//logo imports
import blueYonder from '../../images/blueyonder.png'
import bosch from '../../images/boschlogo.png'
import digitalAlpha from '../../images/dgitalAplha.png'
import DRDO from '../../images/drdo.png'
import ISRO from '../../images/isro.png'
import mercari from '../../images/mercari.png'
import mudrex from '../../images/mudex.png'
import siliconLabs from '../../images/siliconlabs.png'


function Sponsors() {
  return (
    <>
      <div className={Classes.mainHeading}>
       <span className={Classes.firstWord}>SPONS</span>ORS 
      </div>

      <div className={Classes.subHeading}>
       <span className={Classes.firstWord}>HIGH PREP EV</span>ENTS
      </div>

      <div className={Classes.logoContainer}>
        <div className={Classes.logobox}><img src={bosch} alt="logo" className={Classes.bosch} /></div>
        <div className={Classes.logobox}><img src={digitalAlpha} alt="logo" className={Classes.digitalAlpha} /></div>
        <div className={Classes.logobox}><img src={siliconLabs} alt="logo" className={Classes.silicon} /></div>
        <div className={Classes.logobox}><img src={blueYonder} alt="logo" className={Classes.blueYonder} /></div>
      </div>

      <div className={Classes.subHeading}>
       <span className={Classes.firstWord}>MID PREP EV</span>ENTS
      </div>

      <div className={Classes.logoContainer}>
        <div className={Classes.logobox}><img src={ISRO} alt="logo" className={Classes.isro} /></div>
        <div className={Classes.logobox}><img src={DRDO} alt="logo" className={Classes.drdo} /></div>
        <div className={Classes.logobox}><img src={mudrex} alt="logo" className={Classes.mudrex} /></div>
        <div className={Classes.logobox}><img src={bosch} alt="logo" className={Classes.bosch} /></div>
          </div>

      <div className={Classes.subHeading}>
       <span className={Classes.firstWord}>LOW PREP EV</span>ENTS
      </div>

      <div className={Classes.logoContainer}>
        <div className={Classes.logobox}><img src={mercari} alt="logo" className={Classes.mercari} /></div>
    
      </div>


    </>
  )
}

export default Sponsors