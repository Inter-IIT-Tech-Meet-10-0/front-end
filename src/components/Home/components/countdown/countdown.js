import React,{useState,useEffect} from 'react'
import Classes from './Countdown.module.css';

function Countdown() {

  const deadline = "march, 25, 2022";

  const [days,setDays] = useState(0);
  const [hours,setHours] = useState(0);
  const [min,setMin] = useState(0);
  const [sec,setSec] = useState(0);

  const getTimeUntil = (deadline)=>{
     const time = Date.parse(deadline) - Date.parse(new Date());

     if(time < 0) {
         setDays(0);setHours(0); setMin(0); setSec(0);
     }
     else {
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMin(Math.floor((time / 1000 / 60) % 60));
        setSec(Math.floor((time / 1000) % 60));
     }
  }

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className={Classes.Container}>
       <div className={Classes.countdown}>
         <Count type={'DAYS'} tens={days/10} units={days%10}/>
         <Count type={'HOURS'} tens={hours/10} units={hours%10}/>
         <Count type={'MINUTES'} tens={min/10} units={min%10}/>
         <Count type={'SECONDS'} tens={sec/10} units={sec%10}/>
       </div>
    </div>
  )
}

function Count({units,tens,type}) {

  return (
    <div className={Classes.count}>
    <div className={Classes.boxC}>
       <div className={Classes.box1}>
          {Math.floor(tens)}
        </div>
      <div className={Classes.box2}>
         {units}
       </div>
    </div>
    <div className={Classes.days}>
      {type}
    </div>
   
   </div>
  )
    
}


export default Countdown
