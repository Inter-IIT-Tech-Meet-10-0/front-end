import React from 'react'
import Classes from './Countdown.module.css';

function Countdown() {
  return (
    <div className={Classes.Container}>
       <div className={Classes.countdown}>
         <Count/>
         <Count/>
         <Count/>
         <Count/>
       </div>
    </div>
  )
}

function Count() {

  return (
    <div className={Classes.count}>
    <div className={Classes.boxC}>
       <div className={Classes.box}>
           2
        </div>
      <div className={Classes.box}>
          7
       </div>
    </div>
    <div className={Classes.days}>
      DAYS
    </div>
   
   </div>
  )
    
}


export default Countdown
