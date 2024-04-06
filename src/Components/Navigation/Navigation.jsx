// import { NavLink } from "react-router-dom";
import style from "../../css/nav.module.css"
import { useEffect, useState } from "react";
import Hamburger from "../Hamburger/Hamburger";

// TODO: Make sure Hamburger re-renders for every time the state of hamburgerOpen change  

export default function Navigation() {
  const [hamburgerOpen, setHamburgerOpen] = useState(true)
  const [hamburgerIcon, setHamburgerIcon] = useState("fa-bars")

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
    if(hamburgerOpen)
      return setHamburgerIcon("fa-bars")
    setHamburgerIcon("fa-x")
  }
  let windowWidth  
  useEffect(() => {
    windowWidth = window.innerWidth
  })
  if (windowWidth < 500) {
    setHamburgerOpen(false)
  }
  let menuState = "mobile"

  return (
    <nav className={style.nav}>
      <div className={style.navIcon}>
        <i className={`fa-solid ${hamburgerIcon} fa-xl`} onClick={toggleHamburger}></i>
      </div>
      {windowWidth < 500 ?  <Hamburger state={hamburgerOpen} style={menuState}/> :  <Hamburger state={hamburgerOpen}/>}
     </nav>
  )
}