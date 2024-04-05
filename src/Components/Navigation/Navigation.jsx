import { NavLink } from "react-router-dom";
import style from "../../css/nav.module.css"
import { useState } from "react";

export default function Navigation() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [hamburgerIcon, setHamburgerIcon] = useState("fa-bars")

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
    if(hamburgerOpen)
      return setHamburgerIcon("fa-bars")
    setHamburgerIcon("fa-x")
  }
  return (
    <nav className={style.nav}>
      <div className={style.navIcon}>
        <i className={`fa-solid ${hamburgerIcon} fa-xl`} onClick={toggleHamburger}></i>
      </div>
      {/* <i className={`fa-solid fa-bars fa-xl `+ style.navIcon}></i> */}
      {hamburgerOpen ? 
        <div className={style.navLinks} style={{display: "flex"}}>
        <NavLink 
          to="/"
          className={({isActive, isPending}) =>
          isPending ? "pending" : isActive ? "active" : ""}>Home
        </NavLink>
        <NavLink 
            to="/projects" end
            className={({isActive, isPending}) =>
            isPending ? "pending" : isActive ? "active" : ""}>Projects
          </NavLink>
          <NavLink 
          to="/about"
          className={({isActive, isPending}) =>
          isPending ? "pending" : isActive ? "active" : ""}>About me
        </NavLink>
        <NavLink 
          to="/contact"
          className={({isActive, isPending}) =>
          isPending ? "pending" : isActive ? "active" : ""}>Get in touch
        </NavLink>
      </div>
      : ""}
    </nav>
  )
}
