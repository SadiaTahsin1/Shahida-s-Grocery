import React from 'react';

const ShowOrder = ({o}) => {
    return (
        <div style={{border:"1px solid blue",marginBottom:"1px",width:"40%",marginLeft:"20%"}}>
           <h6 style={{marginLeft:"25%"}}>Product: {o.product.name}</h6><br></br>
            <h6 style={{marginLeft:"25%"}}>Price: ${o.product.price}</h6><br></br>
            <h6 style={{marginLeft:"25%"}}>Placed on: {o.OrderPlaced}</h6><br></br><hr></hr>
        </div>
    );
};

export default ShowOrder;