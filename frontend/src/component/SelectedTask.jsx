import React, {useEffect, useState} from "react";



function SelectedTask(){
    const [task,setTask]=useState([])
    useEffect(() => {
        fetch("http://localhost:9090/chiefTechnician/task/${id}")
            .then((res)=>res.json())
            .then((data)=>setTask(data))
            .catch((error)=> console.error("an error occurred",error))
    }, []);
    return (
        <>
            <div className="bg-blue-950 h-screen w-screen  flex-col justify-center items-center p-2">
                <div className="bg-white shadow rounded-md">
                    <div>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-black ml-5">Location: {task.location}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-black mr-5">Date: {task.date}</p>
                        </div>
                        <div className="flex-col justify-center items-center space-y-6">
                            <div>
                                <h1 className="text-xl text-white font-bold">{task.title}</h1>
                            </div>
                            <div>
                                <p className="text-lg text-white font-semibold">{task.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}