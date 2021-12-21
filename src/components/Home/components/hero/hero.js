import React from 'react'
import Classes from './hero.module.css';
import logo from '../../../../images/logo.png';

function ComingSoon() {
    return (
        <div className={Classes.background}>
           <div className={Classes.centerContainer}>
              <img className={Classes.logo} src={logo} alt='logo'/>
              <div className={Classes.title}> INTER IIT TECH-MEET 10.0</div>  
             <div className={Classes.subtitle}>10 -15 Jan | IIT Kharagpur</div>  
             <div className={Classes.next}>
                 <div className={Classes.nextTitle}>
                   Blah Blah
                 </div>
                 <div className={Classes.nextsubTitle}>
                   Blah Blah
                 </div>
             </div>
           </div>
        </div>
    )
}

export default ComingSoon;
