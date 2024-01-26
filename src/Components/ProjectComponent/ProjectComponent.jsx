import { Link } from "react-router-dom";

export default function ProjectComponent(data) {
  const url = data.description.toLowerCase().split(' ').join('_')
  return (
    <div className="projectCard">
      <Link 
        to={url}
        state={{data}}
      > 
        <div className="row">
          <h3>{data.name}</h3>
          <h4>{data.description}</h4>
        </div>
        <img src={data.image} alt={data.name}/>
      </Link>
    </div>
  )
}
