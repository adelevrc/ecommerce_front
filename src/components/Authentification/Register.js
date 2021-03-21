import React, {useState} from 'react';
import axios from 'axios'; 
import '../../styles/Login.scss'; 

const Register = () => {
    const [userEmailReg, setUserEmailReg] = useState(''); 
    const [userPasswordReg, setUserPasswordReg] = useState(''); 

    let API_URL = process.env.REACT_APP_API_URL;

    const register = () => {
        axios.post(`${API_URL}/auth/signup`, { 
            email: userEmailReg, 
            password: userPasswordReg 
        })
        .then((res) => {
            console.log(res); 
        })
    }

    return(
        <div className="formregister">
            <h1> Créer un compte </h1>
            <form onSubmit={register}>
                <label> <p> Email </p> </label>
                <input 
                    type="text" 
                    onChange={(e)=> {
                        setUserEmailReg(e.target.value)
                    }}
                    placeholder="entrez votre email"/>

                <label> <p> Mot de passe </p> </label>
                <input type="password" 
                    onChange={(e)=> {
                        setUserPasswordReg(e.target.value)
                    }}
                placeholder="entrez votre mot de passe"
                />
                <div>
                <button className="register-btn"> M'enregistrer </button>
                </div>
            </form>
        </div>

    )
}

export default Register; 