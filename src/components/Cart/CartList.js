import React, {useState, useEffect} from 'react'; 
import CartItem from './CartItem'; 
import { v4 as uuidv4 } from "uuid";


const CartList = ({ cart, setCart}) => {

    useEffect(() => {
        total()
    }); 

    const [cartTotal, setCartTotal] = useState(0); 
    const [orders, setOrders] = useState(0); 

    let API_URL = process.env.REACT_APP_API_URL;

    const localStorageToken = JSON.parse(localStorage.getItem('token'));

    
    const total = () => {
        let totalVal = 0; 
        for (let i = 0; i < cart.length; i++){
            totalVal += cart[i].price
        }
        setCartTotal(totalVal); 
    }

    const addCheckout = async () => {
        
        if (localStorageToken === null){
            console.log('Nul'); 
        } else {
        const fetchOrders = await fetch(`${API_URL}/orders`);
        const checkout = await fetchOrders.json();
        setOrders(checkout);
        console.log(orders); 
        }
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
                    name = {item.name}
                    price = {item.price}
                    cart={cart}
                    setCart={setCart}
                />
                )}
                <div className="div-price">
                  <p> Total : {cartTotal} </p>
                </div>

                <button onClick = {() => addCheckout()}> </button>
        </div>
    )

}

export default CartList; 