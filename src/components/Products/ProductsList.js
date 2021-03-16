import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import '../../styles/Articles.scss'


const Products = ({addToCart}) => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 
    let API_URL = process.env.REACT_APP_API_URL; 

    useEffect(() =>{
        axios.get(`${API_URL}/posts`)
        .then(data => {
            setProducts(data.data); 
        })
        .catch (err => console.log(err)); 
    }, [])


    return(
        <div className="container-articles">
        
                <input 
                    type="text" 
                    placeholder="Search ..." 
                    onChange={event => 
                        {setSearchTerm(event.target.value)}}  
                    />
                <div className="container-wrap">  
                        {products.filter((article) => {
                        if (searchTerm === ""){
                            return article
                        } else if (article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return article; 
                        }
                        }).map((product) => (
                        <div className="container-article" key={product._id}>
                            <div className="container-img-title">
                                <figure>
                                <Link className="link" to={`/articles/${product._id}`}>
                                    <img className="img-small" src={product.image} alt={product.name} />
                                </Link>
                                </figure>
                                <h1>{product.title} </h1>
                                <h2> {product.price} € </h2>
                                <button onClick={() =>addToCart(product)}> ajouter au panier</button>
                            </div>
                        </div>
                        ))}
                </div>

        </div>
    )
}



export default Products; 