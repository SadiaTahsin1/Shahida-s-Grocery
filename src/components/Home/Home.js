import React, { useEffect, useState } from 'react';
import Events from '../Events/Events';


const Home = () => {

     const [events, setEvents] = useState([]);

     useEffect(() => {
        fetch('https://obscure-basin-97858.herokuapp.com/events')
         .then(res => res.json())
         .then(data => setEvents(data))
     }, [])

    return (
        <div className="row">
            {
                events.map(event =><Events event={event}></Events>)
            }
        </div>
    );
};

export default Home;