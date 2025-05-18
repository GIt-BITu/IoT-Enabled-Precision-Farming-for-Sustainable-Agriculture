import React, {useEffect, useState} from 'react';
import TechNAvBar from "@/component/Dashboards/TechNAvBar.jsx";
import Button from "@/component/Button.jsx";
import {Link, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";

function AllGreenhouse(){

    const [greenhouses, setGreenhouses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9090/configuration")
            .then(res => res.json())
            .then((data) => setGreenhouses(data))
            .catch((err)=>{console.log(err)})
    }, []);
    return (
        <>
            <div
                className="bg-blue-950 w-[calc(100%-275px)] flex-col justify-center items-center rounded-md p-2 overflow-hidden scrollbar overflow-y-scroll">
                <TechNAvBar>Configuration</TechNAvBar>
                <div className="flex justify-between items-center mt-5">
                    <div>
                        <h1 className="font-semibold text-white text-lg ml-5">All Greenhouses</h1>
                    </div>
                </div>
                <div className="flex gap-5 justify-center items-center flex-wrap">
                    {greenhouses.map((item, index) => (
                        <div key={index} className="bg-white rounded-md flex-col p-7 justify-center space-y-4 items-center w-[30%] ">
                            <h1 className="text-center">Location :{item.location}</h1>
                            <div className="flex justify-center items-center  ">
                                <Link to={`/configuration/${item.id}`}>
                                    <Button className="bg-blue-900 over:bg-blue-950 text-white">Configure</Button>
                                </Link>
                            </div>
                            </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default AllGreenhouse;