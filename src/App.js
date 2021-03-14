import React, {useState, useEffect } from 'react'; 
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'; 

import Authentification from './components/Authentification/Authentification'; 

import './App.css';


import Nav from './components/Nav'; 
import LandingPage from './components/LandingPage'; 
import Articles from'./components/Products/Articles'; 
import Article from './components/Products/Article'; 
import AddArticle from './components/Products/AddArticle'; 
import CartList from './components/Cart/CartList';

import Animals from './components/Animals/AnimalsList'; 
import Animal from './components/Animals/Animal'

import useToken from './components/useToken'; 
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import ProtectedRoutesRoles from './components/ProtectedRoutes/ProtectedRoutesRoles';

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

          <Route component={NotFoundPage} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
