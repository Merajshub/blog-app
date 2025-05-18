import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin =()=>{
    return <div className="bg-neutral-200">
    <div className="sm:grid grid-cols-2 ">
        <Auth type="signin" />  
     <div className="invisible sm:visible">
    <Quote/>
     </div>
    </div>
</div>
}