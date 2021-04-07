import React, { useEffect, useState }  from 'react';
import HandleProduct from '../HandleProduct/HandleProduct';
import { useHistory } from 'react-router';
const ManageProduct = () => {
   
    const [items, setItems] = useState([]);
   
        useEffect(() => {
           fetch('https://obscure-basin-97858.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
        }, [])
   console.log('item',items);
   const history=useHistory();
   const handleSelection=()=>{
       history.push('/manageProduct');
       
     }
     const handleSelection1=()=>{
       history.push('/addItems');
       
     }
       return (
         <div style={{display:"grid",gridTemplateColumns:"30% 60%",marginLeft:"5%"}}>
         <div style={{padding:"10%",backgroundColor:"navy",color:"white",float:"left"}}>
            <h3><a onClick={()=>handleSelection()} style={{cursor:"pointer"}}>Manage Product</a></h3><br></br>
            <h3><a onClick={()=>handleSelection1()} style={{cursor:"pointer"}}>Add Product</a></h3><br></br>
            <h3>Edit Product</h3>
        </div>
        <div style={{float:"left"}}>
          <h2>Manage Product</h2>
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