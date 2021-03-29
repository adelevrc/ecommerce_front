import React, { useEffect, useState } from 'react'; 
import {withRouter} from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import '../../styles/Profile.scss'; 
import Orders from './Orders'; 


const Profile = () => {

    const [user, setUser] = useState([]); 
    const [isAdmin, setIsAdmin] = useState(true); 

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
        <div className="myaccount">

            <h1> Mon compte </h1>

            <div className="info">
                <h2> Mes informations : </h2>
                <h3> Email : {user.email} </h3>
                <h3> Nom Prénom : {user.name}</h3>
                <h4> Numéro de téléphone : {user.phoneNumber}</h4>
            </div>

            <div className="info">
                <h2> Mes commandes : </h2>
                <Orders />
            </div>

            <div className={`${isAdmin ? 'info' : 'not-auth-component'}`}>
                <h2> Vous êtes sur la partie Administrateur, vous pouvez : </h2>

                <div className="div-row-admin">
                    <Link style={{ textDecoration: 'none' }} to={`/create/produits`}>
                        <h3 className="add-link"> Ajouter un produit </h3>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={`/create/animals`}>
                        <h3 className="add-link"> Ajouter un animal </h3>
                    </Link>
                        
                </div>
            </div>
        </div>
    )
}

export default withRouter(Profile);