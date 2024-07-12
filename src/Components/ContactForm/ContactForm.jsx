import { useNavigate } from "react-router-dom";
import styles from "../../css/form.module.css"

export default function ContactForm() {
  const navigate = useNavigate();
  async function handleSubmit(e) {
      e.preventDefault();
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify({
              access_key: process.env.REACT_APP_ACCESS_KEY,
              name: e.target.name.value,
              email: e.target.email.value,
              subject: e.target.subject.value,
              message: e.target.message.value,
          }),
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
          navigate(`/contactsuccess`, {state:{result}})
      }
  }

return (
  <>
    <form onSubmit={handleSubmit} className={styles.form}>
        <div>
            <p>
                If you have any questions or requests, feel free to reach out to me!
            </p>
        </div>
        <div>
            <label htmlFor="name">Your Name*</label>
            <input type="text" name="name" required placeholder="Your name" />
        </div>
        <div>
            <label htmlFor="email">Your E-mail*</label>
            <input type="email" name="email" required placeholder="email@example.com" />
        </div>
        <div>
            <label htmlFor="subject">Subject*</label>
            <input type="text" name="subject" required placeholder="Your question" />
        </div>
        <div>
            <label htmlFor="message">Your message*</label>
            <textarea name="message" required rows="3" placeholder="Enter Message"></textarea>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
  </>
);
}