import axios from "axios";

import {  useState } from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css'; 

export const Publish = ()=>{
    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");
    const navigate = useNavigate();


    
    return <div className="bg-slate-200 h-screen flex justify-center ">
    <div className="max-w-screen-lg w-full  p-3 pt-5">
        <input onChange={(e)=>{
            setTitle(e.target.value)
        }} type="text" placeholder="Title" className=" w-full  focus:outline-none border border-black text-gray-900 rounded-md p-3 "/>
        {/* <textarea onChange={(e)=>{
            setDescription(e.target.value)
        }} name="message" id="message" rows={7} placeholder="Type your blog..." className="w-full border border-black rounded-md p-3 mt-4"></textarea> */}
        <div className="bg-white border border-black mt-2 rounded-md overflow-hidden">

        <ReactQuill theme="snow"
        value={description}
        onChange={setDescription}
        placeholder="Type your blog..."
        className="bg-white mt-2 "/>
        </div>

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
        }} type="submit" className=" rounded-lg bg-black p-3 font-medium  px-5 py-2.5 text-white mt-4 hover:shadow-[5px_5px_0px_rgba(22_163_74)] hover:-translate-x-[4px] hover:-translate-y-[4px]">Publish post</button>
    </div>
    </div>
    //rgb(22 163 74)
}