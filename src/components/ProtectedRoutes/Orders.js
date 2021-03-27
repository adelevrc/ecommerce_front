import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'; 
import '../../styles/Profile.scss'


const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [datas, setDatas]=useState([])


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
}, [API_URL, userToken.token])


    const productsOrdered = orders.map((product) => {
        return product.products
    }
    )

    console.log(productsOrdered); 

  
    for (let i = 0; i < productsOrdered.length; i++){
        const dataElement = productsOrdered[i];
        // infinite loop 
        // setDatas(productsOrdered[i]); 
        console.log('coucou');
        console.log(productsOrdered[i]);
        console.log("salut");
        console.log(dataElement);

        for (let j = 0;j < dataElement.length; j++){
            console.log(dataElement[i])
        }
    }

    return (
        <div>
            {/* {datas.map((product) =>
                    <ul>
                        <li key={uuidv4()}> {product.products}</li>
                    </ul>
                )
            } */}
        </div>
    )
}


export default Orders;