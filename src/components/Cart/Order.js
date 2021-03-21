import React, {useEffect, useState} from 'react'; 


const Order = () => {

    const [orders, setOrders] = useState([]); 

    const API_URL = process.env.REACT_APP_API_URL; 

    useEffect(() =>{
        fetchOrders()
    }, [])

    const fetchOrders = async () => {
        console.log("coucou"); 
        console.log(`${API_URL}/orders/user`); 
        const fetchOrders = await fetch(`${API_URL}/orders/user`);
        const orders = await fetchOrders.json();
        setOrders(orders);
        console.log(orders);
    }

console.log(orders);

    return(
        <div>
            <h1> Hello </h1>
        </div>

    )
}

export default Order; 