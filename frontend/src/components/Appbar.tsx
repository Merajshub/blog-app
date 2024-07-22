import { FaSearch } from "react-icons/fa"
import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"





export const Appbar = ()=>{
    return <div className="border-b justify-between flex px-10 py-4">
        <Link to={'/blogs'}>
        <div className="font-bold text-2xl">
            Medium
        </div>
        </Link>
        <div className="flex items-center">
        <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-96'/>
        <button>
                <FaSearch className='text-slate-600'/>
                </button>
        </div>
        <div className="flex gap-8 items-center">
            <Link to={'/publish'}>
        <div>
            <button className="bg-black rounded-full text-white text-xs text-center  px-5 py-2.5 font-bold"> New Blog</button>
        </div>
            </Link>
            <Avatar name="Meraj"/>
        </div>


    </div>
}