import React, {useState} from 'react';
import axios from 'axios'; 
import s from '../styles/connexion.module.css'; 

const Register = () => {
    const [userEmailReg, setUserEmailReg] = useState(''); 
    const [userPasswordReg, setUserPasswordReg] = useState(''); 

    const register = () => {
        axios.post('http://localhost:8000/auth/signup', { 
            email: userEmailReg, 
            password: userPasswordReg 
        })
        .then((res) => {
            console.log(res); 
        })

        console.log(userEmailReg); 
        console.log(userPasswordReg); 
    }

    return(
        <div className={s.formregister}>
            <h1> Créer un compte </h1>
            <form onSubmit={register}>
                <label> <p> Email </p> </label>
                <input 
                    type="text" 
                    onChange={(e)=> {
                        setUserEmailReg(e.target.value)
                    }}
                    />

                <label> <p> Mot de passe </p> </label>
                <input type="password" 
                    onChange={(e)=> {
                        setUserPasswordReg(e.target.value)
                    }}
                />
                <div>
                <button> M'enregistrer </button>
                </div>
            </form>
        </div>

    )
}

export default Register; 