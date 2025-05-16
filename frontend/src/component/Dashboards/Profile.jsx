import React, {useState} from 'react';
import Pic from '/src/assets/client4.jpg';
import DropDownProfile from "./DropDownProfile.jsx";

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

function Profile({textColor, emailColor}){
    const [open,setOpen] = useState(false);
    return (
        <>
            <div className="flex justify-center items-center gap-3 py-3 relative">
                <div>
                    <img src={Pic} alt="Profile" className="rounded-full w-14 h-14"/>
                </div>
                <div className="flex flex-col">
                    <h1 className={`${textColor} text-xl`}>Elon Musk</h1>
                    <span className={emailColor}>elonmusk@gmail.com</span>
                </div>
                <i onClick={() => setOpen(prev => !prev)} className="fa-solid fa-ellipsis absolute text-[#f1f7e7] text-xl right-3 top-3 cursor-pointer hover:bg-[#f1f7e7] hover:text-[#0c1b0e] p-1 rounded-full transition duration-300 ease-in-out"></i>
            </div>
            {open && <DropDownProfile items={items} bgColor="bg-[#f1f7e7]" textColor="text-[#0c1b0e] hover:bg-[#cbe1bd] hover:text-[#0c1b0e]"/>}
        </>
    )
}

export default Profile;