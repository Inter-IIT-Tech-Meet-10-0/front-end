import React,{useState} from 'react'
import Classes from './AboutUs.module.css';
import AboutTechMeet from '../AboutTechMeet/AboutTechMeet';
import AboutIITKGP from '../AboutIITKGP/AboutIITKGP';
import WinnersTimeline from '../WinnersTimeline/WinnersTimeline';

function AboutUs() {

  const [activeTab,setActiveTab] = useState('tech-meet');


  return (
    <div>
  
      <div className={Classes.mainHeading}>
       <span className={Classes.firstWord}>ABOUT</span>  US 
      </div>
      <div className={Classes.navbarContainer}>
        <div className={Classes.navbar}>
        
        <div onClick={()=>setActiveTab('tech-meet')} className={activeTab==='tech-meet' ? Classes.highlight : Classes.navItem}> ABOUT TECH MEET</div>
        <div onClick={()=>setActiveTab('iit-kgp')} className={activeTab==='iit-kgp' ? Classes.highlight : Classes.navItem}>ABOUT IIT KHARAGPUR</div>
        <div onClick={()=>setActiveTab('winners')} className={activeTab==='winners' ? Classes.highlight : Classes.navItem}>WINNERS TIMELINE</div>
        
        </div>
        
      </div>
      {activeTab === 'tech-meet' && <AboutTechMeet/>}
      {activeTab === 'iit-kgp' && <AboutIITKGP/>}
      {activeTab === 'winners' && <WinnersTimeline/>}
    </div>
  )
}

export default AboutUs
