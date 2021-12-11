import React from 'react'
import Classes from './ComingSoon.module.css';
import logo from '../../images/logo.png';

function ComingSoon() {
    return (
        <div className={Classes.background}>
           <div className={Classes.centerContainer}>
              <img className={Classes.logo} src={logo} alt='logo'/>
             <span className={Classes.text}> COMING SOON</span>  
             <span className={Classes.subtitle}> 10 - 15 Jan | IIT Kharagpur</span>  
           </div>
        </div>
    )
}

export default ComingSoon
