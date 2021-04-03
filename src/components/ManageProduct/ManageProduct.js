import React, { useEffect, useState }  from 'react';
import HandleProduct from '../HandleProduct/HandleProduct';
import { useHistory } from 'react-router';
const ManageProduct = () => {
   
    const [items, setItems] = useState([]);
   
        useEffect(() => {
           fetch('https://obscure-basin-97858.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setItems(data))
        }, [])
   console.log('item',items);
   const history=useHistory();
   const handleSelection=()=>{
       history.push('/manageProduct');
       
     }
     const handleSelection1=()=>{
       history.push('/addEvents');
       
     }
       return (
         <div style={{display:"flex"}}>
         <div style={{width:"30%",padding:"5%",height:"100%",backgroundColor:"navy",color:"white"}}>
            <h3><a onClick={()=>handleSelection()}>Manage Product</a></h3><br></br>
            <h3><a onClick={()=>handleSelection1()}>Add Product</a></h3><br></br>
            <h3>Edit Product</h3>
        </div>
        <div style={{width:"50%"}}>
            <table><tr>
           <th>Product</th>
           <th>Weight</th>
           <th>Price</th>
           <th>Action</th></tr></table>
               {
                  items.map(i =><HandleProduct i={i}></HandleProduct>)
               }</div>
           </div>
       );
   };

export default ManageProduct;