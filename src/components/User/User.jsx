import React from "react";
import { useParams } from "react-router-dom";
export default function User() {
    const {Userid}=useParams();
    return(
        <div className="bg-gray-600 text-white text-3xl p-5">User:{Userid} </div>
    );
}