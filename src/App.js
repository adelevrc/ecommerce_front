import React, {useState, useEffect } from 'react'; 
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'; 

import './App.css';


import Nav from './components/Nav'; 
import LandingPage from './components/LandingPage'; 
import Products from'./components/Products/ProductsList'; 
import Article from './components/Products/Article'; 
import AddArticle from './components/Products/AddArticle'; 
import CartList from './components/Cart/CartList';

import Animals from './components/Animals/AnimalsList'; 
import Animal from './components/Animals/Animal'

import useToken from './components/useToken'; 
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import ProtectedRoutesRoles from './components/ProtectedRoutes/ProtectedRoutesRoles';
import Authentification from './components/Authentification/Authentification'; 


import Profile from './components/ProtectedRoutes/Profile'; 

function App() {

  const { token, setToken } = useToken();
  const localCart = JSON.parse(localStorage.getItem('productCart')) || []; 
  const [cart, setCart] = useState(localCart); 

  useEffect(() =>{
    numberOfCartItems() 
  }, [cart])

  const numberOfCartItems = () =>{
    return cart.length;
}

  const addToCart = (product) => {
    setCart([...cart, product]); 
    localStorage.setItem('productCart', JSON.stringify(cart)); 
  }

  return (
    
    <div className="App">
      <Router>

        <Nav 
          token={token}
          numberOfCartItems={numberOfCartItems}
        /> 

        {/* <LandingPage/> */}

        <Switch>

          <Route path="/" exact>
            <LandingPage 
            />
          </Route>

          <Route path="/produits" exact>
            <Products 
              addToCart={addToCart}
              />
          </Route>

          <Route path="/products/:_id" exact  component={Article}/> 

          {/* <Route
            path='/articles/:_id"'
            render={(props) => (
              <Article {...props} addToCart={addToCart}  />
            )}
         /> */}

          {/* <Route path="/articles/:_id" exact>
            <Article
            cart={cart} setCart={setCart}
              />x
          </Route> */}

          <Route path="/cart" exact >
            <CartList 
            cart={cart}
            setCart={setCart}
            />
          </Route>

          <ProtectedRoutesRoles path="/create" exact 
            component={AddArticle} 
            token={token}/>

          <Route path="/animals" exact>
            <Animals />
          </Route>

          <Route path="/animals/:_id" exact component={Animal} /> 

          <ProtectedRoutes path="/profile" exact 
              component={Profile} 
              token={token} />



          <Route path="/authentification" exact>
            <Authentification
              token={token}
              setToken={setToken}
            />
          </Route>


        </Switch>

      </Router>
    </div>
  );
}

export default App;
