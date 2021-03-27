import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import '../../styles/Articles.scss'


const Products = ({addToCart}) => {

    const [products, setProducts] = useState([]);
    const [isAdmin, setisAdmin] = useState(false); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const API_URL = process.env.REACT_APP_API_URL; 

    useEffect(() =>{
        axios.get(`${API_URL}/products`)
        .then(data => {
            setProducts(data.data); 
        })
        .catch (err => console.log(err)); 
    }, [products, API_URL])

    useEffect(() =>{
        if(localStorage.getItem('token') != null)
        checkIsAdmin(); 
    }, []);

    const checkIsAdmin = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        if(userToken === null){setisAdmin(false)}
        if(userToken.userRole === null){setisAdmin(false)}
        if(userToken.userRole === 'admin'){setisAdmin(true)}
    }


    const deleteItem = (product) => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        
        axios.delete(`${API_URL}/products/${product._id}`,
        {
            headers:{'Authorization': 'Bearer ' + userToken.token}
        })
        refreshProductsPage(); 
    }

    const refreshProductsPage = () => {
        setProducts(products => [...products]);
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
                                
                                <div className="div-btn"> 
                                    <button onClick={() =>addToCart(product)}> ajouter au panier</button>
                                    <Link to={`/modification/admin/produits/${product._id}`}>
                                        <button className={`btn-update ${isAdmin ? '' : 'not-auth-component'}`}> Modifier </button>
                                    </Link>
                                    <button className={`btn-delete ${isAdmin ? '' : 'not-auth-component'}`}onClick={() =>deleteItem(product)}> Supprimer </button>
                                </div>
                            </div>
                        ))}
                </div>

        </div>
    )
}

export default Products; 