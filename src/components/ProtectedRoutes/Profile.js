import React, { useEffect, useState } from 'react'; 
import {withRouter} from 'react-router-dom'; 
import s from '../styles/connexion.module.css'; 


const Profile = () => {



    const [user, setUser] = useState([]); 

    const localStorageTokenParse = JSON.parse(localStorage.getItem('token'));
    const userId = localStorageTokenParse.userId
    console.log(userId); 

        useEffect(() => {
         if (user != null) fetchUser(); 
     }, [])

    const fetchUser =  async () => {
        const fetchUser = await fetch (`http://localhost:8000/auth/${userId}`); 
        const user = await fetchUser.json(); 
        setUser(user); 
        console.log(user); 
    }

    return (
        <div className={s.myaccount}>
            <h1> Mon compte </h1>
            <h2> Email : {user.email} </h2>
        </div>
    )
}

export default withRouter(Profile);