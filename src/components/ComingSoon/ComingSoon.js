import React from 'react'
import Classes from './ComingSoon.module.css';
import logo from '../../images/logo.png';

function ComingSoon() {
    return (
        <div className={Classes.background}>
           <div className={Classes.centerContainer}>
              <img className={Classes.logo} src={logo} alt='logo'/>
              <span className={Classes.title}> INTER IIT TECH-MEET 10.0</span>  
             <span className={Classes.subtitle}> IIT Kharagpur</span>  
             <span className={Classes.text}> COMING SOON</span>  
           </div>
        </div>
    )
}

export default ComingSoon