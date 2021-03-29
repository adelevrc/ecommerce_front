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
        
        <h1> Nous contacter </h1>
        <div className="p-contact">
        <p>Une question sur notre association ? Vous voulez devenir bénévole ou travailler pour nous ? Vous voulez connaître nos prochaines actions ?
          Vous pouvez nous contacter par mail via le formulaire ci-dessous. Nous vous répondons dans les 3 jours. 
        </p>
        <p> A bientôt ! </p>
        </div>
         <form id="contact-form" onSubmit={sendEmail}>
            <input className='contact-input' type="hidden" name="contact_number"/>
            <label>Nom Prénom</label>
            <input className='contact-input' type="text" name="name" placeholder="Votre Nom Prénom"/>
            <label>Adresse email</label>
            <input className='contact-input' type="email" name="email" placeholder="Votre adresse email"/>
            <label>Message</label>
            <textarea className='contact-textarea' name="message" placeholder="Votre message"></textarea>
            <input className="input-submit"type="submit" value="Envoyer"/>
        </form>
      </div>
  )
}

export default Contact;

  
