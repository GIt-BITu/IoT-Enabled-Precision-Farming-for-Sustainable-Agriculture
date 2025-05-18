import React, {useEffect, useState} from "react";
import TechNAvBar from "@/component/Dashboards/TechNAvBar.jsx";
import Button from "@/component/Button.jsx";
import {Link, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";

function TechnicianDashboard() {
    const [greenhouses, setGreenhouses] = useState([]);


    useEffect(() => {
        fetch("http://localhost:9090/Technician")
            .then(res => res.json())
            .then((data) => setGreenhouses(data))
            .catch((err)=>{console.log(err)})
    }, []);

    const listG=greenhouses.map((item,index)=>
        <div key={index} className="bg-white rounded-md p-1 flex items-center justify-between ">
            <p className="text-black font-semibold ml-5">The Owner: {item.owner}</p>
            <p className="text-black font-semibold ml-5">Location: {item.location}</p>
            <div>
             <Link to={`/Technician/${item.id}`}>   <Button className="text-white bg-blue-900 mr-5">Configure it</Button></Link>
            </div>
        </div>
)
    return (
        <>
            <div className="bg-blue-950 w-[calc(100%-275px)] flex-col justify-center items-center rounded-md p-2
                overflow-hidden scrollbar overflow-y-scroll">
                <TechNAvBar>Dashboard</TechNAvBar>
                <div className="flex justify-between items-center mt-5">
                    <div>
                        <h1 className="font-bold text-white text-lg ml-5">My Team</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <div className="bg-white rounded-md flex-col justify-center items-center rounded-md p-2 w-[30%] space-y-4">
                        <div>
                            <h1>Team Name</h1>
                        </div>
                        <div>
                            <p>Team job</p>
                        </div>
                        <div className="flex justify-around w-full items-center ">
                            <Button className="bg-black hover:bg-slate-800 text-white">Check details</Button>
                            <Button className="bg-blue-800 text-white hover:bg-blue-900">Check Task</Button>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center mt-5 ">

                    </div>

                </div>
                <div>
                    <h1 className="text-white text-lg font-bold ml-5 mt-5">Existing Greenhouses</h1>
                </div>
                <div className="flex-col space-y-2 justify-center items-center mt-5">
                    {listG}
                </div>
            </div>
        </>
    )
}
export default TechnicianDashboard;