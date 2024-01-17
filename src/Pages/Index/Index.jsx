// import { NavLink } from "react-router-dom";
import Picture from "../../Components/Picture/Picture";

export default function Index() {
  document.title="Anette Dahle"
  return (
    <div>
      <h1>HI! Welcome!</h1> 
      <section>
      <p>
      My name is Anette, and I'd love to show you around! <a href="#test" className="pointer"><i className="fa-solid fa-arrow-down-long fa-beat fa-xl"></i></a>
       </p>
      <Picture/>      
      <h3 id="test">Next Title</h3>
      <p>
        LOREM iuharu wrgio wrg rg uHGUGrk u wgiu guiearg eau rha jr huiaeghialerg iurghe e hahø  haheøaohgroøh paoøeh a 
      </p>
      </section>
    </div>
  )
}
