import logo from "./logo_1.png";
import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import './NavBar.css';

function NavBar() {

  const navigate = useNavigate();
  const [background,setBackground]= useState(false);
  const [hamburger,setHamburger] = useState(window.innerWidth < 900);
  const [showDropdown,setShowDropdown] = useState(false);

  const changeBackground =()=>{
    if(window.scrollY > 66){
      setBackground(true);
   }else {
     setBackground(false)
   }
  }

  const changeHamBurger =() =>{
    if(window.innerWidth < 900) {
      setHamburger(true)
    }else{
      setHamburger(false);
    }
  }


  useEffect(() => {
    changeBackground();
    changeHamBurger();
    window.addEventListener("scroll", changeBackground)
  })

  return (

    <>
    <div className={background || showDropdown ? "navbarContainerbackground" : "navbarContainer"}>
      <div className="logoBox">
        <img onClick={()=>{navigate('/')}} src={logo} alt="InterIIT Logo" className="logo" />
      </div>
      {hamburger ? <HamBurgerMenu showDropdown={showDropdown} setShowDropdown={setShowDropdown}/> : (
         <div className="itemContainer">
         <Link to="" ></Link>
         <Link to=""></Link>
         <Link to=""></Link>
         <Link to=""></Link>
         <Link to=""></Link>
         <Link to=""></Link>
         <Link to=""></Link>
         <Link to="/about" className="navitem">ABOUT US</Link>
         <Link to="/events" className="navitem">EVENTS</Link>
         </div>
      )}
    </div>
    {showDropdown && <DropDownNavBar showDropdown={showDropdown} setShowDropdown={setShowDropdown}/>}
      
    </>
  )

}

const HamBurgerMenu =({showDropdown,setShowDropdown}) =>{

  
  return (
    <>
    <div className="hamContainer" onClick={()=>{setShowDropdown(!showDropdown)}}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    </>
  )
}
const DropDownNavBar =({showDropdown,setShowDropdown}) =>{

  return (
    <>
    <div className="dropdownContainer">
    <Link to="/about"  onClick={()=>{setShowDropdown(!showDropdown)}} className="navitemDropdown">ABOUT US</Link>
    <Link to="/events" onClick={()=>{setShowDropdown(!showDropdown)}} className="navitemDropdown">EVENTS</Link>
    </div>
    </>
  )
}

export default NavBar
