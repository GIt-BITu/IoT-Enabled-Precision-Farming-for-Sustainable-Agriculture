import React, {useEffect, useState} from 'react';
import TechNAvBar from "@/component/Dashboards/TechNAvBar.jsx";
import Button from "@/component/Button.jsx";
import {Link} from "react-router-dom";

function Completed() {

    const [completedTasks, setCompletedTasks] = useState([]);


    useEffect(() => {
        fetch("http://localhost:9090/Completed-Tasks")
            .then((res)=>res.json())
            .then((data) => setCompletedTasks(data))
            .catch((err)=>{console.log(err)})
    }, []);

    function Completed() {
        if(completedTasks.filter(item=>item.progress_status==="finished").length===0){
            return(
                <>
                    <div className="bg-white rounded-md mt-7 px-7 py-6">
                        <h1 className="text-blue-950 text-center font-semibold">you haven't completed any task yet </h1>
                    </div>
                </>
            )
        }else {
        return completedTasks.filter(item=>item.progress_status==="finished").map(item=>
            <div key={item.index} className="bg-white flex flex-col items-center px-7 py-6 space-y-4 justify-center rounded-md mt-7">
                <div>
                    <h1 className="text-blue-950">{item.title}</h1>
                </div>
                <div>
                  <Link to={`/report/${item.id}`}><Button className="bg-blue-900 hover:bg-blue-950 text-white">Check Report</Button></Link>
                </div>
            </div>
        );
        }
    }
    return (
        <>
            <div
                className="bg-blue-950 w-[calc(100%-275px)] flex-col justify-center items-center rounded-md p-2 overflow-hidden scrollbar overflow-y-scroll">
                <TechNAvBar>Completed Tasks</TechNAvBar>
                <div className="flex-col gap-5 mt-5">
                    <div>
                        <h1 className="font-semibold text-amber-100 text-lg ml-5">All completed Tasks</h1>
                    </div>
                    <div className="flex gap-5 justify-center items-center flex-wrap">
                        <Completed/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Completed;