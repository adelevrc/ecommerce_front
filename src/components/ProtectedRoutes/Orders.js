import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'; 
import '../../styles/Article.scss'


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
        let ordersFromBackend = data.data;

        const productsOrdered = ordersFromBackend.map((order) => {
                return order.products
            }
        )
        setOrders(productsOrdered);

        let dataElements = [];
        for (let i = 0; i < productsOrdered.length; i++){
            const dataElement = productsOrdered[i];
            setDatas(dataElement); 

            for (let j = 0;j < dataElement.length; j++){
                dataElements.push(dataElement[i])
                console.log(dataElement[i])
            }
        }
    })
    .catch (err => console.log(err));
}, [API_URL, userToken.token])

    return (
        <div>
            {datas.map((product) =>
            <div className="div-orders" key={uuidv4()}>
                    <div className="details-orders">
                        <h3>{product.title} - {product.price} € </h3>
                    </div>
            </div>
                )
            }
        </div>
    )
}


export default Orders;