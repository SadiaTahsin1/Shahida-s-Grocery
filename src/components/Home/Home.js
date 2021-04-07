import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';


const Home = () => {

     const [items, setItems] = useState([]);

     useEffect(() => {
        fetch('https://obscure-basin-97858.herokuapp.com/items')
         .then(res => res.json())
         .then(data => setItems(data))
     }, [])

    return (
        <div className="row" style={{marginLeft:"10px"}}>
            {items.length===0 && <img src="https://media3.picsearch.com/is?WcUsHVEeMO5tQHP1V3REzDFnYzRYoHvxdcGyXgozBYM&height=239" alt="" style={{margin:"5% 20%",height:"500px",width:"700px"}}></img>}
            {
                items.map(i =><Items item={i}></Items>)
            }
        </div>
    );
};

export default Home;