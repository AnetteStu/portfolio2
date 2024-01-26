import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ProjectComponent from "../../Components/ProjectComponent/ProjectComponent";

export default function Projects() {
  document.title="Projects"
  return (
    // <section>
      <div className="projects">
        <Breadcrumb/>
        <section className="projectcontainer">
          <ProjectComponent 
            name="Holidaze" 
            description="Final Exam" 
            repo="https://github.com/AnetteStu/exam2" 
            demo="https://kads-holidaze-exam2.netlify.app/" 
            image="https://i.gyazo.com/3d4ad2f0e2861683327f9c9ac4136ff0.jpg"
            thoughts="Definetly my biggest project while studying, this project connects to an API provided by the school, that students could log into and manage. You're able to make an account and book any venue.
            Today there's many changes I would implement though"
          />
          <ProjectComponent 
            name="eCommerce" 
            description="JavaScript Framework Course Assignment" 
            repo="https://github.com/AnetteStu/Javascript_Frameworks_CA/tree/prototype" 
            demo="https://kadsca.netlify.app/" 
            image="https://i.gyazo.com/7fb1e2772672ac8564e10f889b35174b.jpg"
            thoughts="I experienced a lot with styling and element interactions in this project."
          />
        </section>
      </div>
    // </section>
  )
}
