import { useState, useEffect } from "react";


const UseFetch = (url) => { 
    
    const[data,setData]=useState();

    useEffect(()=>{ //Hook used for performing side effects. 
        fetch(url) //initiates an HTTP request to the specified url.
        .then((res)=>res.json()) //converts the response from the server to JSON format.
        .then((data)=>setData(data)) //sets the retrieved data to the state variable data.
    },[])
    return [data]
}

export default UseFetch
