import Button from "@/component/Button.jsx";
import React from "react";
import {Link} from "react-router-dom";


function ComplaintSidebar(){
    return (
        <>
            <div className="w-44 mx-auto  rounded-md overflow-hidden bg-white">
                <div className="bg-cover bg-center">
                    <img src="/src/assets/complaint.png" alt="pic"/>
                </div>
                <div className="w-full">
                    <Link to="/complaint" >
                        <Button className=" w-full text-black font-bold flex gap-1 items-center justify-center hover:bg-[#f1f7e7]"><i className="fa-solid fa-plus"></i>Complaint</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ComplaintSidebar;