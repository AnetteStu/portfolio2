import { Link } from "react-router-dom"

export default function NoPage() {
  document.title="404 Page not found"
  return (
    <section>
      <h2>Ops! Seems like the page you tried to access doesn't exist! </h2>
      <p>You can <Link to="/">Go back!</Link></p>
    </section>
  )
}
