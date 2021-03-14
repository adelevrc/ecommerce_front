import React from 'react'; 
import Login from './Login'; 
import Register from './Register'; 
import '../../styles/Login.scss'; 

const Authentification = ({ 
    token, 
    setToken, 
    setIsAuth}) => {

    return(
        <div className="authentificationdiv"> 
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