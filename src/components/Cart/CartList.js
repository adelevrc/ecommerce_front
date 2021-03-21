import React, {useState, useEffect} from 'react'; 
import CartItem from './CartItem'; 
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'; 
import '../../styles/Popup.scss'; 


const CartList = ({ cart, setCart, count, setCount, decrement, increment}) => {

    useEffect(() => {
        total()
    }, []); 

    useEffect(() => {
        retrieveProductId()
    }, []); 

    const [cartTotal, setCartTotal] = useState(0); 
    const [productId, setProductId] = useState([]); 

    
   
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
        console.log(productId); 
        console.log(localStorageToken.userId); 
    }

    const addCheckout = () => {
        axios.post(`${API_URL}/orders`, { 
            products: productId, 
            user: localStorageToken.userId 
        })
        .then((res) => {
            console.log(res); 
        })
    }

    return(
        <div className="container-cart">
            <h1> Mon panier </h1>
            {cart.map((item) =>
                <CartItem
                    key = {uuidv4()}
                    item = {item}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    cart={cart}
                    setCart={setCart}
                    setCount={setCount}
                    count={count}
                    decrement={decrement}
                    increment={increment}
                />
                )}

        <button onClick={()=>addCheckout()}> Commander </button>
                

                <div className="div-price">
                  <p> Total : {cartTotal} </p>
                </div>

        </div>

        



    )

}

export default CartList; 