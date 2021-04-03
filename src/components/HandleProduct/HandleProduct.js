import React from 'react';


const HandleProduct = ({i}) => {
   const deleteItem=id=>{
     fetch(`https://obscure-basin-97858.herokuapp.com/deleteItem/${id}`,
     {method:"DELETE"})
     .then(res=>res.json())
     .then(result=>console.log('deleted')) 
   }
    return (
        <div>
       
           <table style={{textAlign:"center"}}>
           <tr><td>{i.name}</td>
           <td>{i.weight}</td>
           <td>${i.price}</td>
           <td><button onClick={()=>deleteItem(i._id)}>Delete</button></td></tr>
          </table> 
        </div>
    );
};

export default HandleProduct;