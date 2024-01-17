import { useLocation } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

export default function Project() {
  const {state}= useLocation();
  document.title= state.data.name
  return (
    <div>
    <Breadcrumb/>
      <div>
        <img src={state.data.image} alt={state.data.name}/>
      </div>
      <div>
        <h1>{state.data.name}</h1>
        <p>{state.data.description}</p>
        <a href={state.data.demo}>Demo</a>
        <a href={state.data.repo}>Repo</a>
      </div>
    </div>
  )
}
