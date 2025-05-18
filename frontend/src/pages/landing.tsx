import { useEffect, useRef, useState } from "react"
import { gsap } from 'gsap'
import { useNavigate } from "react-router-dom";



export const Landing = ()=>{
    const [currentValue,setCurrentValue]= useState(0);
    const [showLoader,setShowLoader] = useState(true);
    const [showNav,setShowNav] = useState(false);
    const myRef = useRef(null);
    const navigate  = useNavigate();
    


    useEffect(()=>{
        function startLoader(){

            let val = 0;
            function updateCounter():void{
                if(val >= 100){
                    setCurrentValue(100)
                    return;
                }
                val += Math.floor(Math.random()*10) + 1;
    
                if(val > 100){
                    val =100;
                }
                setCurrentValue(val)
                setTimeout(updateCounter,100);
            }
        
            updateCounter();
        }
    
        startLoader()

    },[])

    useEffect(()=>{

        gsap.to(myRef.current,0.25,{
            delay:2.5,
            opacity:0,
            onComplete: () => {
                setShowLoader(false)
                setShowNav(true)
            },
        })
    
        gsap.to(".bar",3.5,{
            delay:0.5,
            height:0,
            stagger:{
                amount:0.5,
            },
            ease:"power4.inOut"
        })

        gsap.from('.head',1.5,{
            delay:3,
            y:100,
            stagger:{
                amount:0.5,
            },
            ease:"power4.inOut"
        })

        gsap.from(".hero", 2,{
            delay:3.5,
            y:200,
            ease:"power4.inOut"
        })

    },[])


    return <div className="w-screen h-screen overflow-hidden bg-neutral-300">
   {showLoader && <h1 ref={myRef} className=" font-zentry counter text-neutral-200 text-[20vw] w-full h-full fixed flex justify-end items-end z-[10000]">{currentValue}</h1>}
   <div className="fixed w-screen h-screen z-50 flex">
    {Array.from({length:10}).map((_,i)=>
        (<div key={i} className="bar w-[10vw] h-[105vw] bg-black"></div>)
    )}
   </div>
   <div className="container">
   
    { showNav && <nav className="flex justify-between p-4  w-full fixed top-0 z-50">
        <div className="p-1 gap-10 flex font-Neue Montreal text-black">
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <div className="flex">

        {/* <button className="text-black underline" onClick={()=>{
                navigate('/signin')
                }}>
            <p>Sign In</p>
        </button> */}
        <button className="bg-black  text-white cursor-pointer p-2 rounded-md font-semibold transition-all duration-300  hover:scale-110 hover : -translate-y-1 hover:shadow-[5px_5px_0px_#f472b6]" onClick={()=>{
                navigate('/signup')
                }}>
            <p>Sign Up</p>
        </button>
        </div>
    </nav>}

    {/* <div className="bg-green-300 p-4 flex justify-end z-50">
        <button className="p-4 bg-white cursor-pointer shadow-2xl hover:bg-violet-600" >Sign up</button>
    </div> */}
    <div className="w-screen flex justify-between px-[2em]">
        <div className="head text-black special-font relative text-[24vw] leading-[1.2]"><b>b</b></div>
        <div className="head text-black special-font relative text-[24vw] leading-[1.2]"><b>l</b></div>
        <div className="head text-black special-font relative text-[24vw] leading-[1.2]"><b>o</b></div>
        <div className="head text-black font-zentry  relative text-[24vw] leading-[1.2]">G</div>
        <div className="head text-black font-zentry  relative text-[24vw] leading-[1.2]">.</div>

    </div>
    <div className=" hero relative h-full mx-auto rounded-md border-4 border-black overflow-hidden" style={{width: 'calc(100vw - 10em)'}}>
        <img className="w-screen h-full cover" src="/blog.jpg" alt="" />
    </div>

   </div>
    </div>
}