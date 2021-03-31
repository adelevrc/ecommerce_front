import React, { useReducer, useState } from 'react';
import axios from 'axios'; 
import { useHistory } from "react-router-dom";


const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
  }

function AddArticle() {

  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  
  const [formData, setFormData] = useReducer(formReducer, {});
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
 
    const API_URL = process.env.REACT_APP_API_URL;

    axios.post(`${API_URL}/products`, formData, 
      {
        headers:{'Authorization': 'Bearer ' + userToken.token}
      }
    )
    .then(res => {
      history.push("/produits");
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
      <h1> Ajouter un produit </h1>
      <form className="form-add-articles" onSubmit={handleSubmit}>
      <div className="container-form-article">
        <fieldset>
          <label>
            <p className="input-label-add-article"> Nom du produit </p>
            <input id="title" type="text" name="title" placeholder="Nom du produit" onChange={handleChange} step="1"/>
          </label>
        </fieldset>

        <fieldset>
         <label>
         <p className="input-label-add-article"> Description </p>
           <textarea id="description" name="description" placeholder="Description du produit" onChange={handleChange} step="1"/>
          </label>
        </fieldset>

         <fieldset>
          <label>
          <p className="input-label-add-article"> Prix </p>
            <input id="price" name="price" placeholder="Prix du produit" onChange={handleChange} step="1"/>
            </label>
        </fieldset>

        <fieldset>
         <label>
         <p className="input-label-add-article">Image</p>
           <input id="image" type="text" name="image" placeholder="lien de l'image" onChange={handleChange} step="1"/>
         </label>
        </fieldset> 
        <button>Ajouter</button>
        </div>   
      </form>
    </div>
  )
}
    
export default AddArticle;