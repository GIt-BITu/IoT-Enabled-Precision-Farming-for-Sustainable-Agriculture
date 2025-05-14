
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Button from "@/component/Button.jsx";


function SeeMore(){
    const [task,setTask]=useState([])
    const {id} = useParams()
    const [ChangeState,setChangeState]=useState(false)

    useEffect(() => {
        fetch(`http://localhost:9090/task/${id}`)
            .then((res)=>res.json())
            .then((data)=>{setTask(data); setChangeState(data.status ==="accepted")})
            .catch((error)=> console.error("an error occurred",error))
    }, [id]);

    const handleAccept=()=>{
        if (!ChangeState){
            fetch(`http://localhost:9090/task/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify( {status :"accepted",progress_status :"it is processed"} )
            })
                .then((res) =>res.json() )
                .catch((error) => {
                    console.log("Failed", error);
                    setChangeState(false)
                });
        }

    };

    function Buttons(){
        if (!ChangeState){
            return (

                <>
                    <Link to={`/chiefTechnician`}> <Button className="bg-blue-900 hover:bg-blue-950" onClick={handleAccept}>Accept</Button></Link>
                    <Link to={`/chiefTechnician`}><Button className="bg-slate-400 hover:bg-slate-700">Return</Button></Link>

                </>)
        }
    }




    return (<>
        <div className="bg-blue-950  flex justify-center items-center p-2 w-[calc(100%-275px)] rounded-md ">
            <div className="bg-white shadow rounded-md p-5 space-y-4 space-x-3 w-[50%] h-[50%]">
                <div className=" flex  justify-between items-center">
                    <p className="font-semibold text-black ml-5">Location: {task.location}</p>
                    <p className="font-semibold text-black mr-5">Date: {task.date}</p>
                </div>
                <div className="flex-col justify-center items-center space-y-6">
                    <div className="flex-col justify-center items-center space-y-6">
                        <h1 className="text-xl text-black font-bold text-center">{task.title}</h1>
                        <p className="text-lg text-black font-semibold text-center">{task.description}</p>
                    </div>
                    <div className="flex justify-center items-center space-x-3">
                        <Buttons />
                    </div>
                </div>
            </div>
        </div>
    </>)

}

export default SeeMore;