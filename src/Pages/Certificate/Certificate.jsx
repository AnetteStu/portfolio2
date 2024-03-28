import { useLocation } from "react-router-dom"
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

export default function Certificate() {
  const {state} = useLocation();
  document.title= `Certificate | ${state.data.name}`
  return (
    <div>
      <Breadcrumb/>
      <section className="wide">
        <h3>{state.data.name}</h3>
        <p>{state.data.description}</p>
        <img src={`/${state.data.image}`} alt={state.data.name}/>
        <a href={state.data.credit}>Credit</a>         
      </section>
    </div>
  )
}
