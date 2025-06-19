import React, {useEffect, useState} from "react";
import TechNAvBar from "@/component/Dashboards/TechNAvBar.jsx";
import Button from "@/component/Button.jsx";
import {Link, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";



function AllTasks(){
    const [pendingTasks, setPendingTasks] = useState([]);
    const [ExistingPendingTasks, setExistingPendingTasks] = useState(true);
    useEffect(() => {
        fetch("http://localhost:9090/PendingTasks")
            .then((response) => response.json())
            .then((data) =>{
            setPendingTasks(data);
            setExistingPendingTasks(!(data.length===0));
        }).catch((err)=>{console.error("an error occurred",err);
            setExistingPendingTasks(false);
        });
    }, []);

    function PendingTasks(){
        if(!ExistingPendingTasks || pendingTasks.filter(item=>item.status==="not accepted").length===0){
            return(
                <>
                    <div className="bg-white px-7 py-8 flex w-[30%] items-center rounded-md">
                        <h1 className="font-bold text-lg text-center">No available Tasks</h1>
                    </div>
                </>
            )}else{
                return (pendingTasks.filter(item=>item.status==="not accepted").map(item=>
                    <div key={item.index} className="bg-white flex px-8 py-7 space-y-4 flex-col w-[30%] overflow-hidden  items-center rounded-md" >
                        <div>
                            <h1 className="text-blue-950 font-semibold">{item.title}</h1>
                        </div>
                        <div className="flex justify-center items-center space-x-3 ">
                            <p className="text-blue-950  text-center">{item.description}</p>
                        </div>
                        <div>
                            <Link to={`/task/${item.id}`} className="text-white bg-blue-900 hover:bg-blue-950"><Button className="bg-blue-900 hover:bg-blue-950">see more</Button></Link>
                        </div>
                    </div>
                ))

            }
        }

    return(
        <>
        <div className="bg-blue-950 w-[calc(100%-275px)] flex-col justify-center items-center rounded-md p-2 overflow-hidden scrollbar overflow-y-scroll">
            <TechNAvBar>Pending Tasks</TechNAvBar>
            <div className="flex flex-col gap-5 mt-5">
                <h1 className="text-amber-100 font-bold text-lg ml-5">All Tasks</h1>
                <div className="flex gap-5 justify-center items-center flex-wrap ">
                    <PendingTasks/>
                </div>
            </div>
        </div>


        </>
        )
}
export default AllTasks;