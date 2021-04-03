import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      name: data.name,
      weight:data.weight,
      price:data.price,
      imageURL: imageURL
    };
    const url = `https://obscure-basin-97858.herokuapp.com/addEvent`;
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '3ac4f0b4b557619bd2c651b376f15155');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  const history=useHistory();
  const handleSelection=()=>{
      history.push('/manageProduct');
      
    }
    const handleSelection1=()=>{
      history.push('/addEvents');
      
    }
  return (
    <div style={{display:"flex",margin:"5%",padding:"5%"}}>
      
      <div style={{width:"30%",padding:"5%",height:"100%",backgroundColor:"navy",color:"white"}}>
        <h3><a onClick={()=>handleSelection()}>Manage Product</a></h3><br></br>
        <h3><a onClick={()=>handleSelection1()}>Add Product</a></h3><br></br>
        <h3>Edit Product</h3>

      </div>
     
      <form onSubmit={handleSubmit(onSubmit)} style={{padding:"5%",margin:"2%"}}>
      
      <input name="name" placeholder="Product Name" ref={register} />
      <input name="weight" placeholder="weight" ref={register}/><br></br>
      <input name="price" placeholder="price" ref={register}/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br></br>
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddEvents;