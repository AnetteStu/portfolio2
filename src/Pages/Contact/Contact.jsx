import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"


export default function Contact() {
  document.title="Contact"
  return (
    <div>
      <Breadcrumb/>
      <span>Send me an <a href="mailto:anette.dahle@hotmail.com">email</a>!</span>
    </div>
  )
}
