import React from "react";
import {Link} from "react-router-dom";
import Button from "@/component/Button.jsx";
import {greenhouseActuators} from "@/component/Dashboards/Farmer/data.jsx";

function ControllingMain(){
    return(
        <>
            <div className="w-full bg-white flex shadow p-5 rounded-md mt-10 gap-4">
                <div className="bg-[#f3f8f8] w-full flex flex-col gap-5 rounded-md p-5">
                    <div className="flex items-center justify-end gap-3">
                        <Link to="#"><Button className="bg-[#152a1b] text-white rounded-md font-semibold hover:opacity-85">greenhouse1</Button></Link>
                        <Link to="#"><Button className="bg-white text-black rounded-md font-semibold shadow hover:bg-[#FFFFFF19]">greenhouse2</Button></Link>
                    </div>
                    <div className="w-[80%] mx-auto shadow p-5 flex items-center gap-3 bg-white rounded-md">
                        {greenhouseActuators.map((item, index) => (
                            <div key={index} className="w-1/2 bg-[#f3f8f8] flex flex-col gap-5 items-center p-5 rounded-md">
                                <div className="flex flex-col gap-4 items-center">
                                    <h1 className="text-xl font-semibold">{item.title}</h1>
                                    <img className="w-32" src={item.img} alt="img"/>
                                </div>
                                <div className="flex items-center justify-around w-full bg-white font-semibold rounded-md p-1 shadow">
                                    <h1>setting</h1>
                                    <span>{`${item.value}%`}</span>
                                </div>
                                <div className="flex justify-end items-center w-full mt-2">
                                    <Link to="#">
                                        <Button className="bg-[#152a1b] text-white rounded-md hover:opacity-85">Control</Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ControllingMain;