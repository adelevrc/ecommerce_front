import React from 'react'; 
import Login from './Login'; 
import Register from './Register'; 
import s from '../../styles/connexion.module.css'

const Authentification = ({ 
    token, 
    setToken, 
    setIsAuth}) => {

    return(
        <div className={s.authentificationdiv}> 
            <Login
             token={token}
             setToken={setToken}
             />

            <Register
            />

        </div>
    )
}

export default Authentification; 