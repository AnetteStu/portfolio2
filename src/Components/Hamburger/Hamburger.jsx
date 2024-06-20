import style from "../../css/nav.module.css"
import { NavLink } from "react-router-dom"
export default function Hamburger(props) {
  return (
    <>
      {props.state ? 
        <div className={style.navLinks }>
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
    </>
  )
}
