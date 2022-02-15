import React from 'react'
import Classes from './Footer.module.css';
import {Link}from 'react-router-dom'

// icons import
import {IoMail} from 'react-icons/io5';
import {BsTelephoneFill} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md';
// import {BsFacebook} from 'react-icons/bs'
// import {FaLinkedinIn} from 'react-icons/fa'
// import {GrInstagram} from 'react-icons/gr';
// import {IoMdSend} from 'react-icons/io';



function Footer() {
    return (
        <div className={Classes.container}>
             <div className={Classes.quickLinks}>
                 <div className={Classes.heading}>
                     Quick Links
                 </div>
                 <ul className={Classes.list1}>
                    <li className={Classes.styleList}><Link to='/' className={Classes.listItem}>HOME</Link></li>
                    <li className={Classes.styleList}><Link to='/about' className={Classes.listItem}>ABOUT US</Link></li>
                    <li className={Classes.styleList}><Link to='/events' className={Classes.listItem}>EVENTS</Link></li>
                 </ul>
             </div>
             <div className={Classes.contactUs}>
             <div className={Classes.headingContact}>
                     Contact Us
                 </div>
                 <ul className={Classes.list}>
                    <li className={Classes.listItem2}> <IoMail color= {'white'} /> <a className={Classes.text} href="mailto:contact@interiit-tech.org">contact@interiit-tech.org</a></li>
                    <li className={Classes.listItem2}><BsTelephoneFill color={'white'}/><span className={Classes.text}>+91 9350031637</span> </li>
                    <li className={Classes.listItem2}><MdLocationOn color={'white'}/><span className={Classes.text}> Kharagpur</span> </li>
                 </ul>
                 {/* <ul className={Classes.socialList}>
                     <li className={Classes.socialItem}><BsFacebook color={'white'} size={25}/></li>
                     <li className={Classes.socialItem}><FaLinkedinIn color={'white'} size={25}/></li>
                     <li className={Classes.socialItem}><GrInstagram color={'white'} size={25}/></li>
                 </ul> */}
             </div>
             {/* <div className={Classes.email}>
                 <div className={Classes.heading2}>
                     Reach Out To Us!
                 </div>
                 <form className={Classes.formContainer}>
                     <input className={Classes.input} type='text'/>
                     <button type='submit' className={Classes.button}><IoMdSend color={'white'} size={25}/></button>
                 </form>
             </div> */}
        </div>
    )
}

export default Footer
