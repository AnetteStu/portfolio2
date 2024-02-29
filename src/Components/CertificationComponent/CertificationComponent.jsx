import { Link } from "react-router-dom"

export default function CertificationComponent(data) {
  const url = data.description.toLowerCase().split(' ').join('_')
  let size = 700
  if(data.size === "small") {size=300}
  if(data.size === "medium") {size=500}
  return (
    <div className="projectCard" style={{width:size+"px", height:size+"px"}}>
      <Link 
        to={`certificates/${url}`}
        state={{data}}
      > 
        <div className="row">
          <h3>{data.name}</h3>
        </div>
        <img src={data.image} alt={data.name} style={{maxWidth:100+"%"}}/>
      </Link>
    </div>
  )
}
