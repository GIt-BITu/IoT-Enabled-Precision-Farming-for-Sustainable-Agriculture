import React, {useState} from 'react';
import TechNAvBar from "@/component/Dashboards/TechNAvBar.jsx";
import Button from "@/component/Button.jsx";
import AllTasks from "@/component/Dashboards/ChiefTech/AllTasks.jsx";




function MyTeams() {

    const [flip, setFlip] = useState(true);
    function Switch(){
        if(flip){
            return (
                <>
                <div className="flex justify-between items-center mt-4">
                    <h1 className="text-amber-100 font-semibold text-lg  ml-5">Create a Team</h1>
                    <div className="flex justify-center items-center gap-1">
                        <Button className="bg-amber-100 text-[13px] text-blue-950 ">Team</Button>
                        <Button className=" bg-slate-800 text-[13px] text-white " onClick={() => setFlip(false)}>Task</Button>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <div className="bg-slate-100 rounded-md mt-5 flex-col w-[55%] p-3 justify-center items-center">
                        <form className="  flex flex-col justify-center space-y-2 ">
                            <input className="mt-3 ml-5  border-black rounded-md" type="text"
                                   placeholder=" Name of the team "/>
                            <input className="ml-5 border-black rounded-md" placeholder=" Job of the Team" type="text"/>
                            <div className="flex justify-around items-center gap-1 mt-3 ">
                                <Button className="bg-black text-white">Add members</Button>
                                <Button className="bg-blue-800 text-white ">Create</Button>
                            </div>
                        </form>
                    </div>
                </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="flex justify-between items-center mt-4">
                        <h1 className="text-amber-100 font-semibold text-lg  ml-5">Send a task</h1>
                        <div className="flex justify-center items-center gap-1">
                            <Button className="bg-slate-800 text-[13px] text-white " onClick={() => setFlip(true)}>Team</Button>
                            <Button className=" bg-amber-100 text-[13px] text-blue-950 ">Task</Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center ">
                        <div className="bg-slate-100 rounded-md mt-5 flex-col w-[55%] p-3 justify-center items-center">
                            <form className="  flex flex-col justify-center space-y-2 ">
                                <input className="mt-3 ml-5 border-black rounded-md" type="text"
                                       placeholder=" Title of the task"/>
                                <input className="ml-5 border-black rounded-md" placeholder=" Job" type="text"/>
                                <div className="flex justify-around items-center gap-1 mt-3 ">
                                    <Button className="bg-black text-white">Select Team</Button>
                                    <Button className="bg-blue-800 text-white ">Submit</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )
        }
    }


    return (
        <>
            <div className="bg-blue-950 w-[calc(100%-275px)] flex-col justify-center items-center rounded-md p-2 ">
                <TechNAvBar>Teams</TechNAvBar>
                <div>
                <h1 className="text-amber-100 font-semibold text-lg mt-5 ml-5">My Teams</h1>
                </div>

                <div className=" flex items-center  space-y-4 justify-center  mt-7 gap-5 flex-wrap ">
                    <div className="w-[35%] flex-col justify-center items-center p-5 rounded-md bg-white">
                        <div>
                            <h1 className="text-blue-950 font-bold text-center ">Title of the team</h1>
                        </div>
                        <div className=" flex  w-[100%] justify-around items-center">
                            <Button className="bg-blue-900 text-[13px] hover:bg-blue-950 text-white">check details</Button>
                            <Button className="bg-slate-400 text-[13px] hover:bg-slate-600 text-white">Communicate</Button>
                            <Button className="bg-amber-100  hover:bg-amber-200 text-[13px] rounded-full">+</Button>
                        </div>
                    </div>
                </div>

                <Switch/>

            </div>
        </>
    )
}

export default MyTeams;