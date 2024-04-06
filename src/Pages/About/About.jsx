import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CertificationComponent from "../../Components/CertificationComponent/CertificationComponent";
import style from '../../css/achievements.module.css'


export default function About() {
  document.title= `About`
  return (
    <div>
      <Breadcrumb/>
      <h2>Certificates</h2>
      <section>
        <div className={style.achievements}>
          <CertificationComponent
            name="Cisco Networking Fundamentals"
            description="Certification of completed exam for the Cisco Networking Exam, free edition"
            image={process.env.PUBLIC_URL + "certifications/cisco/cisco-network_cert.png"}
            credit="https://www.credly.com/badges/3b5f2aba-f731-46ca-8499-38b9c0d11612/public_url"
          />
          <CertificationComponent
            name="Microsoft Fundamentals"
            description="Certification of completed exam for the Microsoft Fundamentals"
            image={process.env.PUBLIC_URL + "certifications/ms-900/ms-900_cert.png"}
            credit="https://learn.microsoft.com/en-gb/users/anettedahle-9144/credentials/69b9d7db1ac59417"
          />
          <CertificationComponent 
            name="HTML"
            description="Completed the HTML Exam from W3Schools"
            image={process.env.PUBLIC_URL + "certifications/html/html_cert.jpg"}
            credit="https://verify.w3schools.com/1N5ANMYCGZ"
          />
          <CertificationComponent 
            name="JavaScript"
            description="Completed the JavaScript Exam from W3Schools"
            image={process.env.PUBLIC_URL + "certifications/js/js_cert.jpg"}
            credit="https://verify.w3schools.com/1N36QUNWGH"
          />
        </div>
      </section>
      <section>
        <div className="info_text">
            <h3 id="career">A little bit about me</h3>
            <p>
              I'm a lady from the icy cold (mostly) land of Norway, I was born in the summer of 1998 and has dedicated my life to technology ever since I can remember!
              My mother tongue is norwegian and my secondary language is english, I'm proficient in both. 
            </p>
            <p>
              I've gained a Diploma (Fagbrev) In IT-Service in 2019 and a Higher-Degree in Front-End development as recently as 2023. 
              I have a burning passion for technologies of all sorts and love to tinker with physical machines as well as the magic that makes them work! 
            </p>
            <p>
              Besides computers and programing, I'm also a fantasy artist in the digital domain and an animal-lover at heart. I've also recently discovered a deep fascination in the human phycology.  
              Needless to say, I'm what you can call a jack-of-all-trades. 
            </p>
          </div>   
        <h3 id="career">Deeper dive into my professional career</h3>
        <p>
          
        I've acquire a wide spectrum of knowledge around software and hardware over the years, I have worked with AV equipment, some networking, but most of my time has been spent with windows computers. 
          Recently I got the opportunity to test my skills in a tech company, which thought me a lot about Azure, with it's capabilities for on-prem, cloud and hybrid environments. I also got to administer tenants and end-users.
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
          I love building computers and maintaining them
        </p>
      </section>
    </div>
  )
}
