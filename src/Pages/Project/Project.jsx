import { useLocation } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

export default function Project() {
  const {state}= useLocation();
  document.title= state.data.name
  return (
    <div>
      <Breadcrumb/>
      <section className="wide">
          <div>
            <img src={state.data.image} alt={state.data.name}/>
          </div>
          <div>
            <div className="row">
              <h3>{state.data.name}</h3>
              {state.data.description}
            </div>
            <div className="row">
              <a href={state.data.demo}>Demo</a>
              <a href={state.data.repo}>Repo</a>
            </div>
            <p>{state.data.thoughts}</p>
          </div>
      </section>
    </div>
  )
}
