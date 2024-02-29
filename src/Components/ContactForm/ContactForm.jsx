// netlify="true"

export default function ContactForm() {
  return (
    <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" hidden/>
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      
      <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}
