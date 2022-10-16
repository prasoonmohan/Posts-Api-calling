import React from 'react'
import {useState ,useEffect } from 'react'
import axios from "axios";
import Body from './Body';


function Main() {
    const [api,setApi] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/posts')
        .then (res => {
            console.log(res.data.posts);
        setApi(res.data.posts)
        })
        .catch(err=> console.log(err))
        } , [])

       

  return (
    <div>
    
      <Body data={api}/>
      
    </div>
  )
}

export default Main
