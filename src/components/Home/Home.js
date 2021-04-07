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
        <div className="row" style={{marginLeft:"10px"}}>
            {events.length===0 && <img src="https://media3.picsearch.com/is?WcUsHVEeMO5tQHP1V3REzDFnYzRYoHvxdcGyXgozBYM&height=239" alt="" style={{margin:"5% 20%",height:"500px",width:"700px"}}></img>}
            {
                events.map(event =><Events event={event}></Events>)
            }
        </div>
    );
};

export default Home;