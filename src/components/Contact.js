import emailjs  from 'emailjs-com';
import { useHistory } from "react-router-dom";
import '../styles/Contact.scss'; 

const Contact = () => {

  const history = useHistory();
  
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ji6pkfr",
        "contact_form",
        e.target,
        "user_wkOvtXhPl6pCnlxOs28Kr"
      )
      .then(
        (result) => {
          console.log(result.text);
          history.push("/");
        },
        (error) => {
          console.log(error.text);
          alert("NOT LIL")
        }
      );
  }

  return(

      <div className='container-form'>
        <h1> Une question ? Contactez-nous !</h1>
         <form id="contact-form" onSubmit={sendEmail}>
            <input className='contact-input' type="hidden" name="contact_number"/>
            <label>Vote nom</label>
            <input className='contact-input' type="text" name="name"/>
            <label>Votre email</label>
            <input className='contact-input' type="email" name="email"/>
            <label>Ecrivez votre message</label>
            <textarea className='contact-textarea' name="message"></textarea>
            <input className="input-submit"type="submit" value="Envoyer"/>
        </form>
      </div>
  )
}

export default Contact;

  
