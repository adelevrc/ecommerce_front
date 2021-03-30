import React, {useState, useEffect} from 'react'; 
import CartItem from './CartItem'; 
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'; 
import '../../styles/Cart.scss'
import '../../styles/Popup.scss'; 


const CartList = ({ cart, setCart,localCart}) => {

    useEffect(() => {
        retrieveProductId()
    }, []); 


    const [cartTotal, setCartTotal] = useState(0); 
    const [productId, setProductId] = useState([]); 

    useEffect(() => {
        total()
    }, [cart]);

    let API_URL = process.env.REACT_APP_API_URL;
    const localStorageToken = JSON.parse(localStorage.getItem('token'));

    const total = () => {
        let totalVal = 0; 
        for (let i = 0; i < cart.length; i++){
            totalVal += cart[i].price
        }
        setCartTotal(totalVal);
    }

    const retrieveProductId = () => {
       const productId = (cart.map((product) =>
        product._id
        ))
        setProductId(productId); 
    }

    const addCheckout = () => {
        axios.post(`${API_URL}/orders`, { 
            products: productId, 
            user: localStorageToken.userId 
        })
        .then(localStorage.removeItem('productCart'))
        .then(alert('Félicitation pour votre commande'))
        .then( window.location.reload())
        .catch (err => console.log(err)); 
    }

    if(cart === null){
        return(
            <div className="if-cart-null"> 
                <h1> Vous n'avez aucun article dans votre panier </h1>
            </div>
        )
    } else {
        return(
            <div className="container-cart">
                <h1> Mon panier </h1>
                <p className={`${cartTotal===0 ? 'display-p' : 'display-none'}`}> Votre panier est vide </p>
                <div className="div-cart-wrapper">
                {cart.map((item) =>
                    <CartItem
                        key = {uuidv4()}
                        item = {item}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        cart={cart}
                        setCart={setCart}
                    />
                    )}
                </div>
                
                <div className={`${cartTotal===0 ? 'display-none' : 'display'}`}> 
                    <div className="div-price">
                        <p> Total : {cartTotal}  €</p>
                    </div>
    
                    <button className='btn-order' onClick={()=>addCheckout()}> Commander </button>
                </div>
            </div>
        )

    }

  

}

export default CartList; 