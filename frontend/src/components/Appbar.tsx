
import { Avatar } from "./BlogCard"
import { Link, useNavigate } from "react-router-dom"





export const Appbar = ()=>{
    const navigate = useNavigate();
    

    return <div className="border-b-2 border-black justify-between flex px-10 py-4">
        <Link to={'/blogs'}>
        <div className="font-bold text-2xl">
             BLOG.
        </div>
        </Link>
        {/* <div className="flex items-center">
        <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-96'/>
        <button>
                <FaSearch className='text-slate-600'/>
                </button>
        </div> */}
        <div className="flex gap-8 items-center">
            <Link to={'/publish'}>
        <div>
            <button className="bg-black rounded-full text-white text-xs text-center  px-5 py-2.5 font-bold transition-all duration-300  hover:shadow-[5px_5px_0px_#f472b6] hover:-translate-x-[4px] hover:-translate-y-[4px]"> New Blog</button>
        </div>
            </Link>
            <div>
            <button onClick={()=>{
                localStorage.removeItem('token');
                navigate('/signin');
            }} className="bg-black rounded-full text-white text-xs text-center px-5 py-2.5 font-bold transition-all duration-300  hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[5px_5px_0px_#f472b6]">Signout</button>
        </div>
            <Avatar name="Meraj"/>
            
        </div>


    </div>
}