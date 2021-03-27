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
        let orders_from_backend = data.data;
        setOrders(orders_from_backend);
        const productsOrdered = orders_from_backend.map((order) => {
                return order.products
            }
        )
        console.log(productsOrdered);
        let dataElements = [];
        for (let i = 0; i < productsOrdered.length; i++){
            const dataElement = productsOrdered[i];
            console.log('coucou');
            console.log(productsOrdered[i]);
            console.log("salut");
            console.log(dataElement);

            for (let j = 0;j < dataElement.length; j++){
                dataElements.push(dataElement[i])
                console.log(dataElement[i])
            }
        }
        setDatas(dataElements);
        console.log("YOUPI");
        console.log(dataElements);
        console.log(datas);

    })
    .catch (err => console.log(err));
}, [API_URL, userToken.token])




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