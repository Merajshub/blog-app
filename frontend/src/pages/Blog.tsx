import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Appbar } from "../components/Appbar";
import { Avatar } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blog = ()=>{
    const { id } = useParams();
    const {loading,blog} = useBlog({
        id:id || ""
    });
    if(loading){
        return <div>
            <Appbar/>
        <div className="flex justify-center">
            <BlogSkeleton/>
        </div>
        </div>


        
    }
    return <div>
        <Appbar/>
        <div className="flex flex-sol justify-center">

        <div className="grid grid-cols-4 px-5 pt-3 gap-2 pt-12 max-w-screen-xl ">
            <div className=" col-span-3">
                <div className="text-5xl font-bold">
                {blog?.title}
                </div>
                <div className="text-slate-500 pt-2">
                    Posted on 8 Dec 2021
                </div>
            <div dangerouslySetInnerHTML={{ __html:blog?.content??""}} className="pt-4">
                
            </div>
            </div>
            <div className="">
                Author
                <div className="flex w-full items-center gap-4">
                    <div>
                        <Avatar  name={blog?.author.name || "Anonymous"}/>
                    </div>
                <div>
                <div className="text-xl font-sm pt-2">
                {blog?.author.name|| "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500 text-sm">
                    Random catch about the author's ability to grab the user's attention
                </div>
                </div>
            </div>
            </div>

        </div>
        </div>
        
    </div>
}