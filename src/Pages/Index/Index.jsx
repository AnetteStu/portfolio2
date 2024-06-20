import { Link } from "react-router-dom"
import style from "../../css/landing.module.css"

export default function Index() {
  document.title="Anette Dahle"
  return (
    <div className={style.landing}>
      <section>
        <div className={style.landing_page}>
          <div className={style.landing_info}>
            <div>
              <span className={style.landing_name}>Anette Dahle</span>
              <p>rjherpoh orjkgoper ogihHER HJ P </p>
              <p>regiokhmnj</p>
            </div>
            <Link to="/about">Want to read more about me?</Link>
          </div>
          <div className={style.landing_image}>
            <img src={process.env.PUBLIC_URL + "img/mesmol_smoller.png"} alt="Anette Dahle"/>
          </div>
        </div>
      </section>
      <section href="#next">
        
      </section>
    </div>
  )
}