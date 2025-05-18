import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Button from "@/component/Button.jsx";



function AllDevices(){
    const [device, setDevice] = useState([]);
    const [available,setAvailable ] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:9090/configuration/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setDevice(data);
                console.log(data);
            setAvailable(!(data.length===0));})
            .catch((error)=> {console.error("an error occurred",error)});
    }, [id]);
    const handleClick =(itemId)=>{
        fetch(`http://localhost:9090/configuration/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify( {id:itemId, status:true} )
        }).then(res => res.json()).catch((error)=> {console.error("an error occurred",error)});
    }


    function ListD() {
        if (!available || device.filter(item => item.status === false).length === 0) {
            return (
                <div className="bg-white flex px-8 py-7 space-y-4 flex-col justify-center items-center rounded-md">
                    <h1 className="text-blue-950 font-bold text-center">There are no available IoT devices</h1>
                </div>
            )
        }else {
            return device.filter(item => item.status === false).map(item =>
            <div key={item.index} className="bg-white flex px-8 py-7 space-y-4 flex-col w-[35%] overflow-hidden  items-center rounded-md">
                <div>
                    <h1 className="text-center text-blue-950 font-bold">IoT device</h1>
                </div>
                <div className="flex justify-between items-center w-full ">
                    <p className="mr-2 text-blue-950 font-semibold">Type: {item.type}</p>
                    <p className="ml-2 text-blue-950 font-semibold">Role: {item.role}</p>
                </div>
                <div>
                 <Link to={`/configuration`}>  <Button className="bg-blue-900 hover:bg-blue-950 text-white"  onClick={()=>handleClick(item.id)}>Connect it</Button></Link>
                </div>
            </div>)

        }
    }
    return (
        <>
            <div className="bg-blue-950 w-[calc(100%-275px)] flex-col justify-center items-center rounded-md p-2
                overflow-hidden scrollbar overflow-y-scroll">
                <div className="flex justify-between items-center mt-5">
                    <div>
                        <h1 className="font-semibold text-white text-lg ml-5">All Devices</h1>
                    </div>
                </div>
                <div className="flex gap-5 justify-center items-center flex-wrap mt-5">
                    <ListD />
                </div>
            </div>
        </>
    )
}
export default AllDevices;