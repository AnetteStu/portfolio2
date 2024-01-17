import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink 
        to="/"
        className={({isActive, isPending}) =>
        isPending ? "pending" : isActive ? "active" : ""}>Home
      </NavLink>
      <NavLink 
          to="/projects"
          className={({isActive, isPending}) =>
          isPending ? "pending" : isActive ? "active" : ""}>Projects
        </NavLink>
      <NavLink 
        to="/contact"
        className={({isActive, isPending}) =>
        isPending ? "pending" : isActive ? "active" : ""}>Contact
      </NavLink>
    </nav>
  )
}
