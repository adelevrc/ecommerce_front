import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 



const Articles = ({cart , setCart}) => {

    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 

    useEffect(() =>{
        axios.get("http://localhost:8000/posts")
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
        <div>
            <main>
                <input 
                    type="text" 
                    placeholder="Search ..." 
                    onChange={event => 
                        {setSearchTerm(event.target.value)}}  
                    />
                <div className='articles-container'>  
                        {articles.filter((article) => {
                        if (searchTerm === ""){
                            return article
                        } else if (article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return article; 
                        }
                        }).map((article) => (
                        <div className="glass" key={article._id}>
                            <div className="container-img-title">
                                <figure>
                                <Link className="link" to={`/articles/${article._id}`}>
                                    <img className="img-small"src={article.image} alt={article.name} />
                                </Link>
                                </figure>
                                <h1>
                                    {article.title}
                                </h1>
                                <h2> {article.price} € </h2>
                                <input type='submit' value='add' onClick={() =>addToCart(article)}/>
                            </div>
                        </div>
                        ))}
                </div>
            </main>
        </div>
    )
}



export default Articles; 