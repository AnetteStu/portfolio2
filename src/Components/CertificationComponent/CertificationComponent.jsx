import { Link } from "react-router-dom"

import style from '../../css/achievements.module.css'

export default function CertificationComponent(data) {
  const url = data.description.toLowerCase().split(' ').join('_')

  return (
    <Link 
      to={`certificates/${url}`}
      state={{data}}
    > 
      <div className={style.certificate}>
        <div className={style.certificate__info}>
          <img src={data.image} alt={data.name} style={{maxHeight:100+"%"}}/>
          <div className={style.certificate__href_credit}>
            <h3>{data.name}</h3>
            {/* <a href={data.credit} className={style.credit__link}>Credit</a> */}
          </div>
          <div className={style.certificate__description}>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}


// TODO: Delete this 
// let size = 700
// if(data.size === "small") {size=300}
// if(data.size === "medium") {size=400}
// <div className="certificateCard" style={{width:size+"px", height:size-60+"px", marginBottom:"1em"}}>
//   <Link 
//     to={`certificates/${url}`}
//     state={{data}}
//   > 
//     {/* <div className="row">
//       <h3>{data.name}</h3>
//     </div> */}
//     <img src={data.image} alt={data.name} style={{maxWidth:100+"%"}}/>
//   </Link>
// </div>