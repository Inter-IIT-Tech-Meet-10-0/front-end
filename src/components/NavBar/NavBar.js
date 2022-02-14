import logo from "./logo_1.png";
import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import './NavBar.css';

function NavBar() {

  const navigate = useNavigate();
  const [background,setBackground]= useState(false);

  const changeBackground =()=>{
    if(window.scrollY > 66){
      setBackground(true);
   }else {
     setBackground(false)
   }
  }
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground)
  })

  return (

    <>
    <div className={background? "navbarContainerbackground" : "navbarContainer"}>
      <div className="logoBox">
        <img onClick={()=>{navigate('/')}} src={logo} alt="InterIIT Logo" className="logo" />
      </div>
      <div className="itemContainer">
      <Link to="" ></Link>
      <Link to=""></Link>
      <Link to=""></Link>
      <Link to="/about" className="navitem">ABOUT US</Link>
      <Link to="/events" className="navitem">EVENTS</Link>
      </div>
    </div>
    </>
  )

}

export default NavBar
