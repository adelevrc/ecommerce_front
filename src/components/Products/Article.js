import React, { useState, useEffect } from 'react'; 


import '../../styles/Article.scss'; 

const Article = ({ match }) => {

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
    console.log(product.title);
    
    return(
        <div className="main-single-article">
            <img src={product.image} alt={product.title} />
            <div className="article-details">
                <h1 className="h1-single-article"> {product.title} </h1>
                <h2> {product.price}€</h2>
                <p> {product.description} </p>
                
            </div>
        </div>
    )
}


export default Article; 