import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CertificationComponent from "../../Components/CertificationComponent/CertificationComponent";

export default function About() {
  return (
    <div>
      <Breadcrumb/>
      <div className="row">

        <CertificationComponent
          name="Microsoft Fundementals"
          description="Certification of completed exam for the Microsoft Fundamentals"
          image={process.env.PUBLIC_URL + "certifications/ms-900/ms-900_cert.png"}
          size="medium"
          credit="https://learn.microsoft.com/en-gb/users/anettedahle-9144/credentials/69b9d7db1ac59417"
        />
        <CertificationComponent
          name="Cisco Networking Fundementals"
          description="Certification of completed exam for the Cisco Networking Exam, free edition"
          image={process.env.PUBLIC_URL + "certifications/cisco/cisco-network_cert.png"}
          size="medium"
          credit="https://www.credly.com/badges/3b5f2aba-f731-46ca-8499-38b9c0d11612/public_url"
        />
      </div>

      <h3>Front-end development achievements</h3>
      <div className="row">
        <CertificationComponent 
          name="HTML"
          description="Completed the HTML Exam from W3Schools"
          image={process.env.PUBLIC_URL + "certifications/html/html_cert.png"}
          size="medium"
          credit="https://verify.w3schools.com/1N5ANMYCGZ"
        />
        <CertificationComponent 
          name="JavaScript"
          description="Completed the JavaScript Exam from W3Schools"
          image={process.env.PUBLIC_URL + "certifications/js/js_cert.png"}
          size="medium"
          credit="https://verify.w3schools.com/1N36QUNWGH"
        />
      </div>
    </div>
  )
}
