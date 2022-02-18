import React from 'react'
import Classes from './AboutTechMeet.module.css';
import logo from '../../images/logo-about.png';

function AboutTechMeet() {
    return (
        <>
            <div className={Classes.container}>
             <div className={Classes.info1}>
             Inter IIT Tech Meet is the annual technological competition organized by the Indian Institutes of Technology to promote knowledge sharing and promulgating technological advancements. 
                <br />
                <br />
The vision of Inter IIT Tech Meet is to address and illuminate talks on multitudes of real-life challenges and contribute to progressiveness through innovative technological solutions. A pivotal goal of the event is an exchange of ideas in a substantial way that inspire and foster development. 

             </div>
             <div className={Classes.visionbox}>
                 <div className={Classes.title}>
                     OUR VISION 
                 </div>
                 <div className={Classes.imgbox}>
                     <img className={Classes.imgbox} src={logo} alt={'Logo InterIIT'} />
                 </div>
             </div>
             <div className={Classes.info2}>
             
                Blue - the hallmark of empowerment, success, stability and innovation. The crisis spurred experimentation, new ideas, deliberation on sustainability, accelerated research and opened doors to novel initiatives and possibilities. With the rapid growth in digital domains and cutting-edge technology, we truly demonstrate - ‘the sky's the limit’. 
                    <br /><br />
                Green symbolises the renewal of human lives through technology, and the birth of a fresh start. Reinventing the shaken existential system is backed with transformed technological solutions, be it in economics, health care, education, business or industry. Not only does technology revolutionise and digitise human lives, but it also aspires to foster eco-friendliness to safeguard the interests of nature, climate and the biosphere. 
                    <br /><br />
                White characterises the significance of safety, security, ethics and philanthropy in technology and digitisation. Technology strives to solve humanitarian crises and global challenges, along with developing new ways of addressing societal and individual needs. The goodness of technology lies in its motive to restore harmony, togetherness and collective wellbeing across the globe.
             </div>
            </div>

        </>
    )
}

export default AboutTechMeet
