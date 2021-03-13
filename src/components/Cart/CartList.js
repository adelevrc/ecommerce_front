import React, {useState, useEffect} from 'react'; 
import CartItem from './CartItem'; 
import { v4 as uuidv4 } from "uuid";


const CartList = ({ cart, setCart}) => {

    useEffect(() => {
        total()
    }); 

    const [cartTotal, setCartTotal] = useState(0); 
    
    const total = () => {
        let totalVal = 0; 
        for (let i = 0; i < cart.length; i++){
            totalVal += cart[i].price
        }
        setCartTotal(totalVal); 
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
        </div>
    )

}

export default CartList; 