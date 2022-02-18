import React from 'react'
import Classes from './AboutIITKGP.module.css';
import iitkgpLogo from '../../images/iitkgplogo.png';

function AboutIITKGP() {
    return (
        <>
        <div className={Classes.container}>
           <div className={Classes.infoBox}>
               <div className={Classes.logoBox}>
                   <div className={Classes.logo}>
                   <img src={iitkgpLogo} alt="IIT KGP Logo" className={Classes.logo} />
                   </div>
               </div>

               <div className={Classes.content}>
               Indian Institute of Technology Kharagpur is a public technical university established by the government of India in Kharagpur, West Bengal, India. Established in 1951, the institute is the first of the IITs to be established and is recognised as an Institute of National Importance.

               </div>
               <div className={Classes.buttonContainer}>
                   <div className={Classes.button}>
                       <a className={Classes.tagStyle} href='http://www.iitkgp.ac.in/' target={'_blank'} rel="noreferrer">Learn More</a>
                   </div>
               </div>
           </div>
        </div>
        </>
    )
}

export default AboutIITKGP
