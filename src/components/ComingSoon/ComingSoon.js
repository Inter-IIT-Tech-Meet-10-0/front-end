import React from 'react'
import Classes from './ComingSoon.module.css';
import logo from '../../images/logo.png';

function ComingSoon() {
    return (
        <div className={Classes.background}>
           <div className={Classes.centerContainer}>
              <img className={Classes.logo} src={logo} alt='logo'/>
              <div className={Classes.title}> INTER IIT TECH-MEET 10.0</div>  
             <div className={Classes.subtitle}> IIT Kharagpur</div>  
             <div className={Classes.text}> COMING SOON</div>  
           </div>
        </div>
    )
}

export default ComingSoon
