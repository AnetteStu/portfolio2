import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"
// import ContactForm from "../../Components/ContactForm/ContactForm"


export default function Contact() {
  document.title="Contact"
  return (
    <div>
      <Breadcrumb/>
      <section>
        <span>Send me an <a href="mailto:anette.dahle@hotmail.com">email</a>!</span>
        {/* <ContactForm/> */}
      </section>
    </div>
  )
}
