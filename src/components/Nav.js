import React from 'react'; 
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import s from './../styles/nav.module.css'; 
import logo from '../img/logo-noir.png'; 
import cart from '../img/cart-black.svg'; 

const Nav = ({token, numberOfCartItems}) => {
    let history = useHistory();

    const LogoutHandler = async e => {
        e.preventDefault();
        localStorage.removeItem('token');
        history.push("/authentification");
        window.location.reload();
    }

    return (
        <nav>
            <Link style={{ textDecoration: 'none' }} to={`/`}>
                <img className={s.logo} src={logo} alt="logo"/>
            </Link>

            <Link style={{ textDecoration: 'none' }} to={`/produits`}>
                <h1>Boutique</h1>
            </Link>

            <Link style={{ textDecoration: 'none' }} to={`/animals`}>
                <h1> Animaux</h1>
            </Link>

            <Link style={{ textDecoration: 'none' }} to={`/cart`}>
                <Badge badgeContent={numberOfCartItems()} color="primary"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                >
                    <img src={cart} className={s.cart}alt="icone-chariot" />
                </Badge>
            </Link>
            
            <div className={`${token ? 'connected' : ''}`}>
                <Link style={{ textDecoration: 'none' }} to={`/authentification`}>
                    <h1> Connexion </h1>
                </Link>
            </div>

            <div className={`${token ? '' : 'not-connected'}`}>
                <Link style={{ textDecoration: 'none' }} to={`/profile`}>
                    <h1> Mon compte </h1>
                </Link>
            </div>
            {/* <div className={`${token ? '' : 'not-connected'}`}>
                <button onClick={LogoutHandler}> Déconnexion </button>
            </div> */}
        </nav> 
    )
}

export default Nav; 