import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import Counter from './Counter'; 

import '../../styles/Article.scss'; 

const Article = ({ match},{addToCart}) => {

    useEffect(() => {
        fetchProduct();
    }, [])
    
    const [product, setProduct] = useState([]);

    const API_URL = process.env.REACT_APP_API_URL;
    console.log(API_URL); 
    const fetchProduct = async () => {
        const fetchArticle = await fetch(`${API_URL}/products/${match.params._id}`);
        const product = await fetchArticle.json();
        setProduct(product);
    }
    
    return(
        <div className="main-single-article">
            <img src={product.image} alt={product.title} />
            <div className="article-details">
                <h1 className="h1-single-article"> {product.title} </h1>
                <h2> {product.price}€</h2>
                <p> {product.description} </p>
                
               <button className="add-to-cart-btn" onClick={() =>addToCart()}> ajouter au panier</button>

            </div>
        </div>
    )
}


export default Article; 