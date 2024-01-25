// import { NavLink } from "react-router-dom";
import Picture from "../../Components/Picture/Picture";

export default function Index() {
  document.title="Anette Dahle"
  return (
    <div>
      <h1>HI, Welcome!</h1> 
      <section>
        <p className="centerText">
          My name is Anette, and I'd love to show you around! <a href="#about" className="pointer"><i className="fa-solid fa-arrow-down-long fa-beat fa-xl"></i></a>
        </p>
        <Picture/>      
        <h3 id="about">A little bit about me</h3>
        <p>
          I'm a lady from the icy cold (mostly) land of Norway, I was born in the summer of 1998 and has dedicated my life to technology ever since I can remember!
          My mother tongue is norwegian and my secondary language is english, I'm proficient in both. 
        </p>
        <p>
          I've gained a Diploma (Fagbrev) In IT-Service in 2019 and a Higher-Degree in Front-End development as recently as 2023. 
          I have a burning passion for technologies of all sorts and love to tinker with physical machines as well as the magic that makes them work! 
        </p>
        <p>
          Besides computers and programing, I'm also a fantasy artist in the digital domain and an animal-lover at heart. I've also recently discovered a deep fascination in the human psycology.  
          Needless to say, I'm what you can call a jack-of-all-trades. 
        </p>

        <h3 id="career">Deeper dive into my professional career</h3>
        <p>
          I've aquired a wide spectrum of knowledge around software and hardware over the years, I have worked with AV equipment, some networking, but most of my time has been spent with windows computers. 
          Recently I got the oportunity to test my skills in a tech company, which thought me a lot about Azure, with it's capabilities for on-prem, cloud and hybrid enviroments. I also got to administer tenants and end-users.
          I've had a few jobs which revolved around computers, my takeaway from this is that I really love working with customers and ensuring that their needs are met. 
        </p>
        <p>
          I decided to start my journey on becoming a front-end developer in a bit of a nick, but today I'm dedicated to keep building my skillset and an eager student of learning everything I can!
        </p>
        <p>
          I take pride in the work that I do, wether it be in front-end, IT or anything else, my utmost priority is providing a project or service that the end-user can use as expected, or better. 
        </p>
        <h3 id="non-certified">The non-certified bit</h3>
        <p>
          Technician 
          Hoppy computer builder and maintainer 
        </p>
      </section>
    </div>
  )
}
