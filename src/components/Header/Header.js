import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
const Header = () => {

    const [loggedIn,setLoggedIn]=useContext(UserContext); 
    return (
        <div>
            
        <ul>
          <li>
            Shahida's Grocery
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Orders">Orders</Link>
          </li>
          <li>
            <Link to="/addEvents">Admin</Link>
          </li>
          <li>
            <Link to="/addEvents">Deals</Link>
          </li>
          <li>
            <Link to="/login">{loggedIn.email?loggedIn.name:'Login'}</Link>
          </li>
        </ul> 
         
        </div>
    );
};

export default Header;