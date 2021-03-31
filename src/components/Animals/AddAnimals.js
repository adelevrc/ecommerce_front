import React, { useReducer, useState } from 'react';
import axios from 'axios'; 
import { useHistory } from "react-router-dom";


const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
  }

function AddAnimal() {

  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  
  const [formData, setFormData] = useReducer(formReducer, {});
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();

   
    const API_URL = process.env.REACT_APP_API_URL;

    axios.post(`${API_URL}/animals`, formData, 
      {
        headers:{'Authorization': 'Bearer ' + userToken.token}
      }
    )
    .then(res => {
      history.push("/animals");
    })
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name, 
      value: event.target.value,
    })
  }

  return(
    <div className="container-add-article">
      <h1> Ajouter un animal </h1>
      <form className="form-add-articles" onSubmit={handleSubmit}>
      <div className="container-form-article">
        <fieldset>
          <label>
            <p className="input-label-add-article"> Nom de l'animal </p>
            <input id="name" type="text" name="name" placeholder="Nom de l'animal" onChange={handleChange} step="1"/>
          </label>
        </fieldset>

        <fieldset>
         <label>
         <p className="input-label-add-article"> Description </p>
           <textarea id="description" name="description" placeholder="Description de l'animal" onChange={handleChange} step="1"/>
          </label>
        </fieldset>

        <fieldset>
         <label>
         <p className="input-label-add-article"> Soins à apporter / remarques </p>
           <textarea id="care" name="care" placeholder="Soins à apporter / remarques" onChange={handleChange} step="1"/>
          </label>
        </fieldset>

        <fieldset>
         <label>
         <p className="input-label-add-article"> Lien de la photo </p>
           <input id="image" type="text" name="image" placeholder="lien de l'image" onChange={handleChange} step="1"/>
         </label>
        </fieldset> 

        <button>Ajouter</button>
        </div>   
      </form>
    </div>
  )
}
    
export default AddAnimal;