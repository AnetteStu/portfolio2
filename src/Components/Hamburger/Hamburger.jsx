import { useState } from "react"
import style from "../../css/nav.module.css"
export default function Hamburger() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
    console.log(hamburgerOpen);
  }
  return (
    <div className={style.navIcon} onClick={toggleHamburger}>
      <i className={`fa-solid fa-bars fa-xl `}></i>
    </div>
  )
}
