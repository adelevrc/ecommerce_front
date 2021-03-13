import React, { useReducer, useState } from 'react';
import axios from 'axios'; 

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

function AddArticle() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);


  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
    
    let API_URL = process.env.REACT_APP_API_URL;

    axios.post(`${API_URL}/posts`, formData)
    .then(res => {
    console.log(`form data : ${formData}`);
    })
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name, 
      value: event.target.value,
    })
    console.log(event.target.name); 
  }

  return(
    <div className="container-add-article">
      <h1> Ajouter un article </h1>
      <form className="form-add-articles" onSubmit={handleSubmit}>
      <div className="container-form-article">
        <fieldset>
          <label>
            <p className="input-label-add-article"> Titre de l'article </p>
            <input id="title" type="text" name="title" placeholder="Entrez le titre de l'article" onChange={handleChange} step="1"/>
          </label>
        </fieldset>

        <fieldset>
         <label>
         <p className="input-label-add-article"> Description </p>
           <textarea id="description" name="description" placeholder="Ecrivez votre article ici" onChange={handleChange} step="1"/>
          </label>
        </fieldset>

        <fieldset>
         <label>
         <p className="input-label-add-article">Image</p>
           <input id="image" name="image" placeholder="Entrez le lien de la photo" onChange={handleChange} step="1"/>
         </label>
        </fieldset> 
        <button type="submit">Ajouter</button>
        </div>   
      </form>
    </div>
  )
}
    
export default AddArticle;