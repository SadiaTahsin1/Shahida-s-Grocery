import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Button} from 'react-bootstrap';

import './Checkout.css';
import { UserContext } from '../../App';
const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {_id} = useParams();
    const [product,setProduct]=useState({});
    useEffect(()=>{
        fetch(`https://obscure-basin-97858.herokuapp.com/event/${_id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[_id])
    const handleCheckout=()=>{
        const orderDetail={...loggedInUser,product:product,OrderPlaced:new Date}
        console.log('orderDetail',orderDetail)
        fetch('https://obscure-basin-97858.herokuapp.com/addOrder', {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
          })
          .then((res => console.log('server side response', res)))
    };
        
    

    return (
        <div>
          <h3 style={{marginLeft:"20%"}}>Checkout</h3> 
          <div className="table">
          <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            </tr>
            <tr>
              <td>{product.name}</td>
              <td>01</td>
              <td>${product.price}</td></tr>

          </table>
          </div> 
         
          <Button variant="primary" style={{marginLeft:"35%",marginTop:"2%"}} onClick={handleCheckout}>Checkout</Button>
       
        </div>
    );
};

export default Checkout;