import React, {useState} from 'react';
import DropDownNotification from "@/component/Dashboards/Farmer/Common/DropDownNotification.jsx";
import {useLocation} from "react-router-dom";

function NavigationBar(){
    const [open, setOpen] = useState(false);
    const location = useLocation();

    function getTitle(){
        switch(location.pathname){
            case "/dashboard":
                return "Dashboard";
            case "/controlling":
                return "Controlling";
            case "/submissions":
                return "Submissions";
            case "/evaluation":
                return "Evaluation";
            case "/complaint":
                return "Complaint";
            case "/installation":
                return "Installation";
            case "/settings":
                return "Settings";
            default:
                return "Dashboard";
        }
    }
    return (
        <>
            <div className="w-full flex items-center justify-between ">
                <div className="w-lg justify-between flex items-center gap-20">
                    <div>
                        <h1 className="text-4xl font-bold">{getTitle()}</h1>
                    </div>
                    <div className="ml-2 flex items-center relative">
                        <i className="fa-solid fa-magnifying-glass absolute left-2 "></i>
                        <input type="text" placeholder="Search" className="py-2 pl-8 outline-none bg-white shadow rounded-sm focus:ring-1 focus:ring-[#0c1b0e]"/>
                    </div>
                </div>
                <div className="px-10 text-xl ">
                    <i onClick={() => setOpen(prev => !prev)} className="fa-solid fa-bell hover:bg-[#f1f1f1] p-2 rounded-full cursor-pointer transition duration-300 ease-in-out "></i>
                    {open && <DropDownNotification />}
                </div>
            </div>
        </>
    )
}
export default NavigationBar;