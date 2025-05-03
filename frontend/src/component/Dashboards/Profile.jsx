import React, {useState} from 'react';
import Pic from '/src/assets/client4.jpg';
import DropDownProfile from "./DropDownProfile.jsx";

function Profile(){
    const [open,setOpen] = useState(false);
    return (
        <>
            <div className="flex justify-center items-center gap-3 py-3 relative">
                <div>
                    <img src={Pic} alt="Profile" className="rounded-full w-14 h-14"/>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-[#f1f7e7] text-xl">Elon Musk</h1>
                    <span className="text-[#b6cbb4]">elonmusk@gmail.com</span>
                </div>
                <i onClick={() => setOpen(prev => !prev)} className="fa-solid fa-ellipsis absolute text-[#f1f7e7] text-xl right-3 top-3 cursor-pointer hover:bg-[#f1f7e7] hover:text-[#0c1b0e] p-1 rounded-full transition duration-300 ease-in-out"></i>
            </div>
            {open && <DropDownProfile />}
        </>
    )
}

export default Profile;