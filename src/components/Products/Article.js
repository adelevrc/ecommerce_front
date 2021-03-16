import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import Counter from './Counter'; 

import '../../styles/Article.scss'; 

const Article = ({ match, addToCart}) => {

    useEffect(() => {
        fetchArticle();
    }, [])
    
    
    const [article, setArticle] = useState([]);

    const API_URL = process.env.REACT_APP_API_URL;

    const fetchArticle = async () => {
        const fetchArticle = await fetch(`${API_URL}/posts/${match.params._id}`);
        const article = await fetchArticle.json();
        setArticle(article);
    }

    return(
      
        <div className="main-single-article">
            <img src={article.image} alt={article.title} />
            <div className="article-details">
                <h1 className="h1-single-article"> {article.title} </h1>
                <h2> {article.price}€</h2>
                <p> {article.description} </p>

               <Counter />
               <button className="add-to-cart-btn" onClick={() =>addToCart()}> ajouter au panier</button>
            </div>
        </div>
  
    )
}


export default Article; 