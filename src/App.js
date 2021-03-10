import React, {useState, useEffect } from 'react'; 
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'; 

import Authentification from './components/Authentification/Authentification'; 

import './App.css';


import Nav from './components/Nav'; 
import LandingPage from './components/LandingPage'; 
import Articles from'./components/Articles'; 
import Article from './components/Article'; 
import AddArticle from './components/AddArticle'; 
import CartList from './components/Cart/CartList';

import Dashboard from './components/Dashboard'; 
import useToken from './components/useToken'; 
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import Profile from './components/ProtectedRoutes/Profile'; 

import NotFoundPage from './components/NotFoundPage/NotFoundPage'; 


function App() {

  const { token, setToken } = useToken();
  const localCart = JSON.parse(localStorage.getItem('articleCart')) || []; 
  const [cart, setCart] = useState(localCart); 

  useEffect(() =>{
    numberOfCartItems() 
}, [cart])

  const numberOfCartItems = () =>{
    return cart.length;
}

  return (
    
    <div className="App">
      <Router>

        <Nav 
          token={token}
          setToken={setToken}
          cart={cart}
          setCart={setCart}
          numberOfCartItems={numberOfCartItems}
        /> 

        {/* <LandingPage/> */}

        <Switch>

          <Route path="/" exact>
            <LandingPage 
            />
          </Route>

          <Route path="/articles" exact>
            <Articles 
              cart={cart}
              setCart = {setCart} 
              numberOfCartItems={numberOfCartItems}
              />
          </Route>

          <Route path="/articles/:_id" exact  component={Article} /> 

          <Route path="/cart" exact >
            <CartList 
            cart={cart}
            setCart={setCart}
            />
          </Route>

          <Route path="/create" exact component={AddArticle} />

          <ProtectedRoutes path="/profile" exact 
              component={Profile} 
              token={token} />


          <Route path="/dashboard" exact>
            <Dashboard 
              token={token}
              setToken={setToken} 
            />
          </Route> 


          <Route path="/authentification" exact>
            <Authentification
              token={token}
              setToken={setToken}
            />
          </Route>

          <Route component={NotFoundPage} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
