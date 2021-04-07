import React,{ createContext, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AddItems from './components/AddItems/AddItems';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/CheckOut/Checkout';
import Orders from './components/Orders/Orders';
import ManageProduct from './components/ManageProduct/ManageProduct';

export const UserContext = createContext();
function App() {
const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
        <div>
          <Header/>
           <hr />
         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/addItems">
            <AddItems />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:_id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct />
          </PrivateRoute>
          <Route path="/login">
           <Login></Login> 
          </Route>
         </Switch>
      </div>
     </Router>
    </UserContext.Provider>
  );
}

export default App;
