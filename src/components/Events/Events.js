import React,{useContext} from 'react';
import { useHistory } from 'react-router';
import { Button,Card } from 'react-bootstrap';

const Events = ({event}) => {
    console.log(event)
    const history=useHistory();
    const handleSelection=(_id)=>{
        history.push(`/checkout/${_id}`);
       
      }
    return (
        <div className="col-md-3">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={event.imageURL} />
        <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>
             ${event.price}
            </Card.Text>
            <Button variant="primary" onClick={()=>handleSelection(event._id)}>Buy</Button>
        </Card.Body>
        </Card>
            {/* <img style={{height: '300px'}} src={event.imageURL} alt=""/>
            <h3>{event.name}</h3> */}
            
        </div>
    );
};

export default Events;