import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import '../../styles/Article.scss'; 

const Article = ({ match }) => {
    useEffect(() => {
        fetchArticle();
    }, [])

    const [article, setArticle] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    const fetchArticle = async () => {
        const fetchArticle = await fetch(`${API_URL}/posts/${match.params._id}`);
        const article = await fetchArticle.json();
        setArticle(article);
        console.log(article);
    }

    return(
      
        <div className="main-single-article">
            <img src={article.image} alt={article.title} />
            <div className="article-details">
                <h1 className="h1-single-article"> {article.title} </h1>
                <h2> {article.price}€</h2>
                <p> {article.description} </p>
                <button> ajouter au panier </button>
            </div>
            
        </div>
  
    )
}


export default Article; 