import React from 'react'
import Classes from './hero.module.css';
import logo from '../../../../images/logo.png';

function ComingSoon() {
    return (
        <div className={Classes.background}>
           <div className={Classes.centerContainer}>
              <img className={Classes.logo} src={logo} alt='logo'/>
              <div className={Classes.title}> Inter IIT Tech-Meet 10.0</div>  
             <div className={Classes.subtitle}>25 - 27 March | IIT Kharagpur</div>  
             <div className={Classes.next}>
                 <div className={Classes.nextTitle}>
                   To Newer Horizons
                 </div>
                 <div className={Classes.nextsubTitle}>
                   In the Wake of the Pandemic
                 </div>
             </div>
           </div>
        </div>
    )
}

export default ComingSoon;
