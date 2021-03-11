import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

const Article = ({ match }) => {
    useEffect(() => {
        fetchArticle();
    }, [])

    const [article, setArticle] = useState([]);

    const fetchArticle = async () => {
        const fetchArticle = await fetch(`http://localhost:8000/posts/${match.params._id}`);
        const article = await fetchArticle.json();
        setArticle(article);
        console.log(article);
    }

    return(
        <div className="main-single-article">
                <img className="img-single-article" src={article.image} alt={article.title} />
                <h1 className="h1-single-article"> {article.title} </h1>
                <p className="p-description"> {article.description} </p>
                <Link to={`/articles/`}>
                    <button className='btn-return'> Retour </button>
                </Link>
        </div>
    )
}


export default Article; 