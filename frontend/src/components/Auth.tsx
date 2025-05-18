import axios from "axios"
import { SignupInput } from "merajj-common"
import { ChangeEvent, FormEvent, useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"



export const Auth=({type}: {type: "signup" | "signin"})=>{
    const navigate = useNavigate();
    const [postInput,setPostInput] = useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
       
        if(e.target.id === "name"){
            setPostInput({...postInput, [e.target.id]:e.target.value})
        }

        if(e.target.id === "email"){
            setPostInput({...postInput, [e.target.id]: e.target.value})
        }

        if(e.target.id === "password"){
            setPostInput({...postInput, [e.target.id]: e.target.value})
        }
        
        
        
    }
    // console.log(postInput);
    const sendRequest = async(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // console.log(postInput);
        
        
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type==='signup'?'signup' : 'signin'}`,postInput);
            const jwt = res.data;
            localStorage.setItem('token',jwt);   
            navigate('/blogs');

            
        } catch (error) {
            alert("Invalid user");
            
            
        }

    }
    
    
    return <div className="flex flex-col justify-center ">
    <div className="mb-10 ">
    <h1 className="text-center  text-2xl font-medium "> Create an account</h1>
    <h2 className="text-center text-gray-500">{type === "signin" ? "Don't have an account?": "Already have an account?"}
        <Link className="hover:underline" to={type ==="signin" ? "/signup" : "/signin"}>{type === "signin" ? " Signup" : " Signin"}</Link></h2>
    </div>
       <div className="">
      <form className="flex flex-col gap-2 max-w-md mx-auto" onSubmit ={sendRequest}>
      {type==="signup" ? <label className="font-semibold">Username</label>:null }
      {type === "signup" ? <input type="text" id="name" placeholder="username" className="border rounded-md p-2"  onChange={handleChange}/>:null}
      <label className="font-semibold">Email</label>
      <input type="text" id="email" placeholder="email" className="border rounded-md p-2"onChange={handleChange}/>
      <label className="font-semibold">Password</label>
      <input type="password" id="password" placeholder="password" className="border rounded-md p-2" onChange={handleChange}/>
      <button className="bg-black text-white p-2 rounded-md mt-6 uppercase hover:shadow-[5px_5px_0px_#f472b6]  hover:-translate-y-[4px] hover:-translate-x-[4px]" >{type === "signin" ? "Signin" : "Signup"}</button>

        </form>
        </div>
        
    </div>



     

}

