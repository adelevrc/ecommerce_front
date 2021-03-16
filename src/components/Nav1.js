import React, {useState} from 'react'; 
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import logo from '../img/logo-noir.png'; 
import cart from '../img/cart-black.svg';
import { FiMenu, FiX } from 'react-icons/fi'; 
import '../styles/Nav.scss'; 

const Nav = ({token, numberOfCartItems}) => {
    let history = useHistory();
    
    const [open, setOpen] = useState(false);

    // const [mobileNav, setMobileNav] = useState(false);

    const LogoutHandler = async e => {
        e.preventDefault();
        localStorage.removeItem('token');
        history.push("/authentification");
        window.location.reload();
    }

    // const navSlide = () => {
    //     setMobileNav(true); 
    //     }
    

    return (
        <nav className="navbar">

            <Link style={{ textDecoration: 'none' }} to={`/`}>
                <img className="logo" src={logo} alt="logo"/>
            </Link>
            

            <Link style={{ textDecoration: 'none' }} to={`/cart`}>
                    <Badge badgeContent={numberOfCartItems()} color="primary"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
            >
                        <img src={cart} className="cart"alt="icone-chariot" />
                    </Badge>
            </Link>

           

            <ul className={`${open} ? 'nav-links active' : 'nav-links'}`}> 

                <li className="nav-item">  
                    <Link style={{ textDecoration: 'none' }} to={`/produits`} onClick={() => setOpen(false)}>
                        <h1 className='link-name'>Boutique </h1>
                    </Link>
                </li>

                <li className="nav-item"> 
                    <Link style={{ textDecoration: 'none' }} to={`/animals`} onClick={() => setOpen(false)}>
                        <h1 className='link-name'> Animaux </h1>
                    </Link>
                </li>
                
                <li className="nav-item"> 
                    <div className={`${token ? 'connected' : ''}`}> 
                        <Link style={{ textDecoration: 'none' }} to={`/authentification`} onClick={() => setOpen(false)}>
                            <h1 className='link-name'> Connexion </h1>
                        </Link>
                    </div>
                </li>

                <li className="nav-item">
                    <div className={`${token ? '' : 'not-connected'}`}> 
                        <Link style={{ textDecoration: 'none' }} to={`/profile`} onClick={() => setOpen(false)}>
                            <h1 className='link-name'> Mon compte </h1>
                        </Link>
                    </div>
                </li>

      
                </ul>
                
            
        </nav> 
    )
}

export default Nav; 