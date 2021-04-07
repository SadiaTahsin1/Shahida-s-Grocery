import React,{useContext} from 'react';
import { useHistory } from 'react-router';
import { Button,Card } from 'react-bootstrap';

const Events = ({item}) => {
    console.log(item)
    const history=useHistory();
    const handleSelection=(_id)=>{
        history.push(`/checkout/${_id}`);
       
      }
    return (
        <div className="col-md-3" style={{padding:"10px"}}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.imageURL} style={{ height:"286px" }}/>
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
             ${item.price}
            </Card.Text>
            <Button variant="primary" onClick={()=>handleSelection(item._id)}>Buy Now</Button>
        </Card.Body>
        </Card>
        </div>
    );
};

export default Events;