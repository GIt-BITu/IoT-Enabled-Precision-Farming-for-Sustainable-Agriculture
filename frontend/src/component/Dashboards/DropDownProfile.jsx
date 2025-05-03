import React from "react";
import { NavLink } from "react-router-dom";

const items = [
    {
        title: "Settings",
        icon: "fa-solid fa-gear",
    },
    {
        title: "Log out",
        icon: "fa-solid fa-arrow-right-from-bracket"
    }
]

function DropDownProfile(){
    return (
        <>
            <div className="relative">
                <ul className="flex flex-col gap-2 bg-[#f1f7e7] rounded-md p-1.5 absolute bottom-24 right-0 w-full z-50" >
                    {items.map((item,index) =>(
                        <NavLink key={index} to="/" className="flex items-center gap-5 text-[17.6px] font-semibold p-2.5 rounded-[10px] transition duration-300 ease-in-out text-[#0c1b0e] hover:bg-[#cbe1bd] hover:text-[#0c1b0e]">
                            <i className={item.icon}></i>
                            <h1>{item.title}</h1>
                        </NavLink>
                    ))}
                </ul>

                <div className="w-10 h-10 bg-[#f1f7e7] absolute bottom-20 right-1 rotate-[45deg]"></div>


            </div>


        </>
    )


}
export default DropDownProfile;


