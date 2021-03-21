import React from 'react'; 
import '../../styles/Cart.scss'; 
import Counter from '../Products/Counter';

const CartItem = ({cart, setCart,  item,  price, title, image, count, setCount, decrement, increment}) => {

    const deleteHandler = () => {
      let selectedCartItems = cart.filter((el) => el._id !== item._id);
      setCart(selectedCartItems);  
      localStorage.setItem('productCart', JSON.stringify(selectedCartItems));
    };

    return(
            <div className="div-cart">
                <img src={image} alt={title}/>
                <div className="div-cart-title-price">
                    <h2> {title} </h2>
                    <h3> {price} € </h3>

                    <Counter 
                    count={count}
                    setCount={setCount}
                    decrement={decrement}
                    increment={increment}
                    item={item}
                    />  

                    <div className="cart-btn-container"> 
                        <button className="btn-cart" > Voir le produit </button>
                        <button className="btn-cart btn-delete" onClick={deleteHandler}> Retirer </button>
                    </div>   
                </div>
          
            </div>
    
    )
}

export default CartItem; 