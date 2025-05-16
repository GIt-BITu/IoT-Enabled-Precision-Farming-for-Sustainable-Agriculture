import React from 'react'
import {Link} from "react-router-dom";
import Button from "@/component/Button.jsx";
import {greenhouseActuators} from "@/component/Dashboards/Farmer/data.jsx";

function Monitoring(){
    return (
        <>
            <div className=" bg-white flex shadow p-5 rounded-md mt-10 gap-4">
                <div className="w-full bg-[#f3f8f8] flex flex-col gap-5 rounded-md p-5">
                    <div className="flex items-center justify-end gap-3">
                        <Link to="#"><Button className="bg-[#152a1b] text-white rounded-md font-semibold hover:opacity-85">greenhouse1</Button></Link>
                        <Link to="#"><Button className="bg-white text-black rounded-md font-semibold shadow hover:bg-[#FFFFFF19]">greenhouse2</Button></Link>
                        <Link to="/installation"><Button className="bg-[#152a1b] text-white rounded-full hover:opacity-85"><i className="fa-solid fa-plus"></i></Button></Link>
                    </div>
                    <div className="w-[75%] h-36 mx-auto bg-white shadow p-5 rounded-md flex items-center justify-around">
                        {greenhouseActuators.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-xl font-semibold gap-8">
                                <h1>{item.title}</h1>
                                <h1>{`${item.value}%`}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Monitoring;