import React from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/Footer.scss'; 

const Footer = () => {
    return(
        <footer>
                <div className="grids-1">
                <Link to={"/contact"}>
                    <h5> Nous contacter </h5>
                </Link>
                <Link to={"/"}>
                    <h5> Accueil </h5>
                </Link>
                <Link to={"/produits"}>
                    <h5> Boutique </h5>
                </Link>
                <Link to={"/animals"}>
                    <h5> Animaux </h5>
                </Link>
            </div>

            <div className="grids-1">
                    <h2> Horaires d'ouverture : </h2>
                    <h3 className="grey-p-footer"> Lun - Sam</h3>
                    <h3 className="grey-p-footer"> 9h00 - 18h00 </h3>
            </div>
            
            <div className="grids-1">
                <h2>  A propos :</h2>
                <h3> <a href="https://www.linkedin.com/in/adele-vercaygne/"> Linkedin </a></h3>
                <h3> <a href="https://github.com/adelevrc"> Github </a></h3>         
            </div>
        </footer>
    )
}

export default Footer; 