import React,{ useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ShowOrder from '../ShowOrder/ShowOrder';
const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email = loggedInUser.email;
    const [order,setOrder]=useState([]);
    console.log('id',email)
    useEffect(()=>{
        fetch(`https://obscure-basin-97858.herokuapp.com/orders/${email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[email])
    console.log(order)
    return (
        <div >
            <h2 style={{marginLeft:"20%"}}>Orders</h2><br></br><hr></hr>
            {order.map(o=><ShowOrder o={o}></ShowOrder>)
            }
            
        </div>
    );
};

export default Orders;