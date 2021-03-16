import React from 'react'; 

const CartItem = ({cart, setCart,  item,  price, title, image}) => {

    const deleteHandler = () => {
      let selectedCartItems = cart.filter((el) => el._id !== item._id);
      setCart(selectedCartItems);  
      localStorage.setItem('articleCart', JSON.stringify(selectedCartItems));
    };

    return(
        <div>
            <div className="div-cart">
                <img src={image} alt={title}/>
                <div className="div-cart-title-price">
                    <h2> {title} </h2>
                    <h3> {price} € </h3>
                    <div className="cart-btn"> 
                        <button> Voir le produit </button>
                        <button onClick={deleteHandler}> Retirer du panier </button>
                    </div>                    
                </div>
            </div>
        </div>
    
    )
}

export default CartItem; 