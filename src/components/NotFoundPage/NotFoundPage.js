import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';



const NotFoundPage = () => {
    return(
        <div>
            <h1> 404 Page NotFound </h1>
            <Link to={`/`}>
                <button className='btn-return'> Retourner à l'accueil </button>
            </Link>
        </div>

    );
  }
  
  export default NotFoundPage;

