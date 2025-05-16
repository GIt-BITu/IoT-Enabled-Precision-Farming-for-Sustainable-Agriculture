import React, {useEffect, useState} from 'react';
import Button from "@/component/Button.jsx";
import {Link, useParams} from "react-router-dom";

function UpdateTask() {
    const [task, setTask] = useState({});
    const [finished, setFinished] = useState(false);
    const [appear,setAppearance] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9090/updateTask/${id}`)
            .then((res)=>res.json()).then((data)=>{setTask(data);
                setFinished(data.progress_status==="finished");
            })
        .catch((error)=> {console.error("an error occurred",error);
        setFinished(false);
        });
    }, [id]);

    const handleClick=()=>{
        if(!finished){
            fetch(`http://localhost:9090/updateTask/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify( {progress_status :"finished",title:title,description:description} )
        }).then((res)=>res.json())
                .catch((err)=>console.error("an error occurred",err));
        }}



    function Form(){
        if (appear){
            return(<>
                <div className=" flex-col h-full gap-5 items-center">
                    <form className="flex gap-5 flex-col justify-around items-center ">
                        <input type="text" required="required" className="border-2 p-2 rounded-md border-black shadow" placeholder="title" />
                        <textarea  required="required" className="p-2 resize-none h-52" placeholder="Description"  ></textarea>
                    </form>
                    <div className="flex justify-around items-center mt-4">
                        <Link to={`/chiefTechnician`}><Button className="text-white bg-slate-500 hover:bg-slate-600">return</Button></Link>
                        <Link to={`/chiefTechnician`}><Button onClick={handleClick} className="text-white bg-blue-900 hover:bg-blue-950">Finish it</Button></Link>
                    </div>
                </div>
            </>)
        }
    }


    return (
        <>
        <div className="bg-blue-950 w-[calc(100%-275px)] flex justify-center items-center rounded-md p-2 ">
            <div className="bg-white shadow rounded-md p-5 space-y-4 space-x-3 w-[50%] ">
                <div>
                    <h1 className="text-center font-bold text-black">{task.title}</h1>
                </div>
                <div className=" flex justify-between items-center mt-5">
                    <p className="font-semibold mr-7">Status: {task.progress_status}</p>
                    <p className="font-semibold ml-7">Location: {task.location}</p>

                </div>
                <div className="flex justify-between items-center ">
                    <p>update the status :</p>
                    <Button onClick={()=>setAppearance(!appear)} className="bg-yellow-600 hover:bg-yellow-700">Finished</Button>
                </div>
                <div className="flex justify-center h-full w-full items-center ">
                <Link to={`/chiefTechnician`}><Button className={` ${!appear ? 'text-white bg-slate-500 hover:bg-slate-600 block' : 'hidden'}`}>return</Button></Link>
                    <Form/>
                </div>
            </div>
        </div>
        </>
    )
}
export default UpdateTask