import React from 'react'; 
import {Route, Redirect} from 'react-router-dom'; 

const ProtectedRoutes = ({ token , component : Component, ...rest}) => {

    const tokenString = localStorage.getItem('token');
    console.log(tokenString);
    const userToken = JSON.parse(tokenString);
    console.log(userToken);


    return <Route {...rest} render={(props) => {

        if (userToken.userRole === 'admin') {
            return <Component/> 
        }else{
            console.log(token.userRole); 
            return <Redirect to={{pathname: '/', state: {from: props.location}}} />
        }
    }}/>
    
}

export default ProtectedRoutes; 