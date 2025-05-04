import React, {useState} from 'react';



function TechNAvBar() {
    const [notification,setNotification] =useState(true)
    return (
        <>
            <nav className="flex justify-between items-center border-[#f5f5dc] border-b-2">
                <div>
                    <h1 className="text-xl ml-5 text-white font-bold hover:text-amber-100">Dashboard </h1>
                </div>
                <div className="flex mr-5 relative">
                        <span
                            className={`  ${notification ? 'absolute right-[0%] fa-solid w-1.5 h-1.5 rounded-full bg-red-600 block' : 'hidden'}`}></span>
                    <i className="cursor-pointer fa-solid fa-bell text-slate-300"
                       onClick={() => setNotification(!notification)}></i>
                </div>
            </nav>
        </>
    )
}
export default TechNAvBar;