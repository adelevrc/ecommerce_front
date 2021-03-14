import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import '../../styles/Articles.scss'


const Articles = ({cart , setCart}) => {

    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 
    let API_URL = process.env.REACT_APP_API_URL; 

    useEffect(() =>{
        axios.get(`${API_URL}/posts`)
        .then(data => {
            setArticles(data.data); 
        })
        .catch (err => console.log(err)); 
    }, [])

    const addToCart = (article) => {
            setCart([...cart, article]); 
            localStorage.setItem('articleCart', JSON.stringify(cart)); 
    }

    return(
        <div className="container-articles">
        
                <input 
                    type="text" 
                    placeholder="Search ..." 
                    onChange={event => 
                        {setSearchTerm(event.target.value)}}  
                    />
                <div className="container-wrap">  
                        {articles.filter((article) => {
                        if (searchTerm === ""){
                            return article
                        } else if (article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return article; 
                        }
                        }).map((article) => (
                        <div className="container-article" key={article._id}>
                            <div className="container-img-title">
                                <figure>
                                <Link className="link" to={`/articles/${article._id}`}>
                                    <img className="img-small" src={article.image} alt={article.name} />
                                </Link>
                                </figure>
                                <h1>{article.title} </h1>
                                <h2> {article.price} € </h2>
                                <button onClick={() =>addToCart(article)}> ajouter au panier</button>
                            </div>
                        </div>
                        ))}
                </div>

        </div>
    )
}



export default Articles; 