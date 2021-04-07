import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';

const HandleProduct = ({i}) => {
   const deleteItem=id=>{
     fetch(`https://obscure-basin-97858.herokuapp.com/deleteItem/${id}`,
     {method:"DELETE"})
     .then(res=>res.json())
     .then(result=>console.log('deleted')) 
   }
    return (
        <div>
       
           <table>
           <tr><td style={{width:"120px",textAlign:"center"}}>{i.name}</td>
           <td style={{width:"120px",textAlign:"center"}}>{i.weight}</td>
           <td style={{width:"120px",textAlign:"center"}}>${i.price}</td>
          

           <td style={{width:"120px",textAlign:"center"}}><button><FontAwesomeIcon icon={faEdit} /><FontAwesomeIcon icon={faTrash} onClick={()=>deleteItem(i._id)}/></button></td></tr>
          </table> 
        </div>
    );
};

export default HandleProduct;