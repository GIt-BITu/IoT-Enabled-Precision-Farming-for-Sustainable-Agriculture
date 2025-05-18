import React, {useEffect, useState} from "react";
import Button  from "@/component/Button.jsx";
import {Link, BrowserRouter as Router, Routes, Navigate, Outlet} from "react-router-dom";
import Task from "@/pages/ChiefTechnician/Task.jsx";
import TechNAvBar from "@/component/Dashboards/TechNAvBar.jsx";




function ChiefMain(){
    const [allTasks,setAllTasks]=useState([])
    const [noData,setNoData]=useState(true)
    useEffect(() => {
        fetch("http://localhost:9090/chiefTechnician").
            then((res)=>res.json()).then((data)=>{
                setAllTasks(data);
                setNoData(!(data.length===0));
        })
            .catch((error=> {console.error("no availabale tasks",error);
            setNoData(false);}))

    }, []);

    const Listp=allTasks.filter(item=>item.status==="accepted" && !(item.progress_status==="finished")).map(item=>
        <div className="bg-white flex flex-col items-center px-7 py-6 space-y-4 justify-center rounded-md mt-7 " >
            <div>
                <h1 className="text-black font-semibold">{item.title}</h1>
            </div>
            <div className="flex justify-center items-center space-x-3 ">
                <p className="text-black">status: {item.progress_status}</p>
                <Link to={`/updateTask/${item.id}`}><Button className="bg-blue-900 text-white">update</Button></Link>
            </div>

        </div>
    )



    function GetrecentTasks(){
        if (!noData || allTasks.filter(item=> item.status==="not accepted").length===0){
            return(
                <>
                    <div className="bg-white flex px-8 py-7 space-y-4 flex-col justify-center items-center rounded-md">
                       <h1 className="text-black text-xl font-bold">No Available Tasks</h1>
                    </div>
                </>
            );
        }else {
                const task = allTasks.filter(item=>item.status==="not accepted")
                const lastThree=task.slice(-3)
            return lastThree.map(item=>
                    <div key={item.index}
                         className=" bg-white flex px-8 py-7 space-y-4 flex-col w-[30%] overflow-hidden  items-center rounded-md">
                        <div>
                            <h1 className="text-black text-[18px] ">{item.title}</h1>
                        </div>
                        <div>
                            <p className="text-black text-center">{item.description}</p>
                        </div>
                        <div>
                            <Link to={`/task/${item.id}`}>
                                <Button className="text-white font-semibold text-lg bg-blue-900 hover:bg-blue-950">see
                                    more</Button>
                            </Link>
                        </div>
                    </div>


        )
            ;
        }
    }

    return (
        <>

            <div className="bg-blue-950 w-[calc(100%-275px)] flex-col justify-center items-center rounded-md p-2 overflow-hidden scrollbar overflow-y-scroll">
                <TechNAvBar>Dashboard</TechNAvBar>
                    <div className="flex justify-between items-center mt-5">
                        <div>
                            <h1 className="font-semibold text-white text-lg ml-5">Recent Tasks</h1>
                        </div>
                        <div>
                            <Link to={`/PendingTasks`}><Button className="mr-5 bg-[#f5f5dc] hover:bg-[#e5e5c9] font-bold text-blue-950 ">View All</Button></Link>
                        </div>
                    </div>
                    <div className=" flex justify-around items-center mt-5">
                        {GetrecentTasks()}
                    </div>
                    <div className="flex-col justify-center items-center mt-7 ">
                        <div>
                            <h1 className="font-semibold text-white ml-5">Tasks in Progress</h1>
                            <div className="flex gap-5 justify-center items-center flex-wrap ">
                                {Listp}
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default ChiefMain;
