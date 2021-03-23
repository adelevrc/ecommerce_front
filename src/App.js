import React, {useState, useEffect } from 'react'; 
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'; 

import './App.css';


import Nav from './components/Nav'; 
import Footer from './components/Footer'; 
import LandingPage from './components/LandingPage'; 
import Products from'./components/Products/ProductsList'; 
import Article from './components/Products/Article'; 
import UpdateProduct from './components/Products/UpdateProduct'; 
import AddArticle from './components/Products/AddArticle'; 
import CartList from './components/Cart/CartList';
import Order from './components/Cart/Order'; 
import Counter from './components/Products/Counter'; 

import Contact from './components/Contact'; 

import Animals from './components/Animals/AnimalsList'; 
import Animal from './components/Animals/Animal'
import UpdateAnimal from './components/Animals/UpdateAnimal'; 

import useToken from './components/useToken'; 
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import ProtectedRoutesRoles from './components/ProtectedRoutes/ProtectedRoutesRoles';
import Authentification from './components/Authentification/Authentification'; 


import Profile from './components/ProtectedRoutes/Profile'; 

function App() {

  const { token, setToken } = useToken();
  const localCart = JSON.parse(localStorage.getItem('productCart')) || []; 
  const [cart, setCart] = useState(localCart); 
  const [count, setCount] = useState(0);

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

  const increment = (item) => {
    setCount(count + 1); 
  }

  const decrement = (item) => {
      setCount(count - 1); 
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

          <Route path="/modification/admin/produits/:id"  component={UpdateProduct} /> 


          <Route path="/products/:_id" exact  component={Article}/> 

          <Route path="/contact" exact component={Contact}/>
          

          <Route path="/orders" exact>
            <Order
              />
          </Route>

          <Route path="/cart" exact >
            <CartList 
            cart={cart}
            setCart={setCart}
            count={count}
            setCount={setCount}
            increment={increment}
            decrement={decrement}
            />
          </Route>

          <ProtectedRoutesRoles path="/create" exact 
            component={AddArticle} 
            token={token}/>

          <Route path="/animals" exact>
            <Animals />
          </Route>
         

          <Route path="/animals/:_id"  exact component={Animal} /> 

          <Route path="/modification/admin/animals/:id" component={UpdateAnimal} /> 


          <ProtectedRoutes path="/profile" exact 
              component={Profile} 
              token={token} />


          <Route path="/authentification" exact>
            <Authentification
              token={token}
              setToken={setToken}
            />
          </Route>
          
          <Counter
            count={count}
            setCount={setCount} 
          />


        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
