import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import '../../styles/Login.scss'; 

async function loginUser(credentials) {
  
  let API_URL = process.env.REACT_APP_API_URL;

    return fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    })
    setToken(token);
    history.push("/");
  }

  return(
    <div className="formlogin">
      <h1>Connectez vous</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} placeholder="entrez votre email"/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} placeholder="entrez votre mot de passe"/>
        </label>
        <div>
          <button className="login-btn" type="submit"> Connexion</button>
        </div>
      </form>
      
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

