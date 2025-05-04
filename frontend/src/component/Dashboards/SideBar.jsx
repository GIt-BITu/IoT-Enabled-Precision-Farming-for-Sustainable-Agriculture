import React from "react";
import Profile from "./Profile.jsx";
import { NavLink } from 'react-router-dom';
import logo from "/src/assets/Logo AB.png";

function SideBar({sideLinks , activeColor , inactiveColor , hover, children, logoColor}) {
    return (
        <>
            <div className="relative w-64 flex flex-col justify-between overflow-hidden ">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between px-5">
                        <div className="flex items-center justify-center gap-1 cursor-default">
                            <img className="w-12 h-12 rounded-full" src={logo} alt="logo"/>
                            <h1 className={`text-2xl font-bold ${logoColor}`}>AgriBloom</h1>
                        </div>
                    </div>
                    <span className="bg-[#FFFFFF19] h-[0.1px] border-none "></span>
                    <div>
                        <ul className="flex flex-col gap-5">
                            {sideLinks.map((link, index) => (
                                <NavLink key={index} to={link.path} className={({ isActive }) => `flex items-center gap-5 text-[17.6px] font-semibold p-2.5 rounded-[10px] transition duration-300 ease-in-out ${isActive ? `${activeColor}` : `${inactiveColor}`}  ${hover}`}>
                                    <i className={link.icon}></i>
                                    <h1>{link.title}</h1>
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    {children}
                </div>
                <div>
                    <span className="block bg-[#FFFFFF19] my-5 h-[0.1px] border-none "></span>
                    <Profile textColor="text-[#f1f7e7]" emailColor="text-[#b6cbb4]"/>
                </div>
            </div>
        </>
    )
}

export default SideBar;