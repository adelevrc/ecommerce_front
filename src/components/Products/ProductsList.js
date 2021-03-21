import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import '../../styles/Articles.scss'


const Products = ({addToCart}) => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 
    const API_URL = process.env.REACT_APP_API_URL; 

    useEffect(() =>{
        axios.get(`${API_URL}/products`)
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
                        {products.filter((product) => {
                        if (searchTerm === ""){
                            return product
                        } else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return product; 
                        }
                        }).map((product) => (
                            <div className="container-img-title" key={product._id}>
                                <figure>
                                <Link className="link" to={`/products/${product._id}`}>
                                    <img className="wrapper-img" src={product.image} alt={product.name} />
                                </Link>
                                </figure>
                                <h1>{product.title} </h1>
                                <h4> {product.price} € </h4>
                                <button onClick={() =>addToCart(product)}> ajouter au panier</button>
                            </div>
                        ))}
                </div>

        </div>
    )
}



export default Products; 