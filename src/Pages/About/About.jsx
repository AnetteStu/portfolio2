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

    </div>
  )
}
