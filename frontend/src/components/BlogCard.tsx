import { Link } from "react-router-dom"


interface BlogCardProps{
    id:number,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const BlogCard = ({id,authorName,title,content,publishedDate}:BlogCardProps)=>{
    
    return <div>
        <Link to={`/blog/${id}`}>
        <div className="border-b p-5 w-screen max-w-screen-md cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[0px_2px_0px_black] disabled:opacity-90 ">
        <div className="flex gap-3 mb-2 items-center">
        <div className="">
            <Avatar name={authorName}/>
        </div>
        <div className="">
          {authorName} 
        </div>
          <div className="text-gray-400 text-sm">
          {publishedDate}
        </div>
        </div>
        

        <div className="font-semibold text-xl border-none">
            {title}
        </div>
        <div dangerouslySetInnerHTML={{__html:content.slice(0,140)+ "..."}} className="">
        </div>
        <div className="text-gray-400 text-sm pt-2">
            {`${Math.ceil(content.length/100)} min read`}
        </div>
        </div>
        </Link>

    </div>
}
export function Avatar({name}:{name:String}){
    return<div className="relative inline-flex items-center justify-center w-5 h-5  overflow-hidden bg-slate-800 rounded-full dark:bg-gray-600 ">
    <span className="text-xs font-xs text-white dark:text-gray-300">{name[0]}</span>
</div>
}