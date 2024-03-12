import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"
// import ContactForm from "../../Components/ContactForm/ContactForm"


export default function Contact() {
  document.title="Contact"
  return (
    <div>
      <Breadcrumb/>
      <section>
        {/* <span>Send me an <a href="mailto:anette.dahle@hotmail.com">email</a>!</span> */}
        {/* <ContactForm/> */}
        Not available at this time, you may reach out to me trough 
        <p>
        <a href="https://www.linkedin.com/in/anette-d/" className="iconLink" title="Reach out to me at LinkedIn!"><i className="fa-brands fa-linkedin-in fa-xl"></i></a>
          
        </p>
      </section>
    </div>
  )
}
