import React, { useEffect, useState } from "react";

export default function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/DIPEN-Dp')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    return(
        <>
        <div className="bg-gray-600 text-3xl text-white p-5">Github Followers:{data.followers} </div>
        <img className="flex flex-wrap justify-center text-center" src={data.avatar_url} alt="Github_photo" width={300} />
        </>
    );
}