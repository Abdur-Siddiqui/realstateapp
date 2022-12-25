import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Property(){

const[Property, setProperty ] = useState([]);

const loadPropertiesFromApi = ()=>{

    axios.get('http://localhost:8081/api/properties/city{city}').then((response) =>{
        let properties=response.data;
        setProperty(properties);
        console.log('Successfully retrieved Items' + results)
    }).catch((error) =>{
        console.log(error);
    });
}
 
 const addProperty =(Booking)=>{
  axios.post('http://http://localhost:8081/api/properties/{listing_Id}/Properties}').then((response)=> {

if(response.status === 200){
    console.log('Successful Post');
}


  }).catch((error) =>{
console.log(error);
  });

 


    return(
        <div>
addProperty();
loadPropertiesFromApi();
        </div>
    );
}
}
export  default Property;
