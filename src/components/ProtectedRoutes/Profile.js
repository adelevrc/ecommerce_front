import React, { useEffect, useState } from 'react'; 
import {withRouter} from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import s from '../styles/connexion.module.css'; 


const Profile = () => {

    const [user, setUser] = useState([]); 
    const [isAdmin, setIsAdmin] = useState(false); 

    const localStorageToken = JSON.parse(localStorage.getItem('token'));
    const userId = localStorageToken.userId

    let API_URL = process.env.REACT_APP_API_URL;

        useEffect(() => {
        fetchUser(); 
     }, [])

    const fetchUser =  async () => {
        const fetchUser = await fetch (`${API_URL}/auth/${userId}`); 
        const user = await fetchUser.json(); 
        setUser(user); 

        const userRole = localStorageToken.userRole;
            if(userRole === "admin"){
                setIsAdmin(true); 
            } else {
                setIsAdmin(false);
            }
        }

    return (
        <div className={s.myaccount}>
            <h1> Mon compte </h1>
            <h2> Email : {user.email} </h2>

            <div className={`${isAdmin ? '' : 'not-auth-component'}`}>
                <h1> Oh hello </h1>

                <Link style={{ textDecoration: 'none' }} to={`/create`}>
                    <h1> Ajouter un produit </h1>
                </Link>
                
            </div>
        </div>
    )
}

export default withRouter(Profile);