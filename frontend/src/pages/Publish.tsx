import axios from "axios";

import {  useState } from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = ()=>{
    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");
    const navigate = useNavigate();


    
    return <div className="flex justify-center ">
    <div className="max-w-screen-lg w-full  p-3 pt-5 ">
        <input onChange={(e)=>{
            setTitle(e.target.value)
        }} type="text" placeholder="Title" className=" w-full border text-gray-900 rounded-lg p-3 "/>
        <textarea onChange={(e)=>{
            setDescription(e.target.value)
        }} name="message" id="message" rows={7} placeholder="Type your blog..." className="w-full border rounded-lg p-3 mt-4"></textarea>
        <button  onClick={async()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content:description
            },{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`);
        }} type="submit" className="border rounded-lg bg-green-700 p-3 font-medium  px-5 py-2.5 text-white mt-4 hover:bg-green-600">Publish post</button>
    </div>
    </div>
}