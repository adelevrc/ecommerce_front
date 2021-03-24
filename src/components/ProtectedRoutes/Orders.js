import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'; 
import '../../styles/Profile.scss'


const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [productsOrdered, setProductsOrdered]=useState([])

    const stringifyToken = localStorage.getItem('token');
    const userToken = JSON.parse(stringifyToken);

    const API_URL = process.env.REACT_APP_API_URL;

        useEffect(() => {
            axios.get(`${API_URL}/orders/user`,
                {
                    headers:{'Authorization': 'Bearer ' + userToken.token}
                } 
            )
                .then(data => {
                    setOrders(data.data)
                })
                .catch (err => console.log(err));
        }, 
            [API_URL, userToken.token])


            orders.forEach(element => {
                console.log(element.products);
                //infinite loop ... 
                // setProductsOrdered(element.products)
            });


    return (
        <div>
            {orders.map((product) =>
                    <div className="div-order" key={uuidv4()}>
                        <h1> {product.products}</h1>
                    </div>
            )
            }
        </div>
    )
}


export default Orders;