import React, {useEffect, useState} from "react";
import TechNAvBar from "@/component/Dashboards/TechNAvBar.jsx";
import Button from "@/component/Button.jsx";


function AllTAsks(){
    const [pendingTasks, setPendingTasks] = useState([]);
    const [ExistingPendingTasks, setExistingPendingTasks] = useState(true);
    useEffect(() => {
        fetch("https://localhost:9090/chiefTechnician/PendingTasks")
            .then((response) => response.json())
            .then((data) =>{
            setPendingTasks(data);
            setExistingPendingTasks(!(data.length===0));
        }).catch((err)=>{console.error("an error occurred",err);
            setExistingPendingTasks(false);
        });
    }, []);

    function PendingTasks(){
        if(!ExistingPendingTasks){
            return(
                <>
                    <div className="bg-white flex p-8 space-y-4 flex-col justify-center items-center rounded-md"><h1>No available Tasks</h1></div>
                </>
            )}else{
                return pendingTasks.filter(item=>item.status==="not accepted").map(item=>
                    <div key={item.index} className="bg-white" >
                        <div className=" ">
                            <p>
                               Location: {item.location}
                            </p>
                            <p>
                                Date: {item.date}
                            </p>
                        </div>
                        <div>
                            <h1 className="text-blue-950 font-semibold">{item.title}</h1>
                        </div>
                        <div className="flex justify-center items-center space-x-3 ">
                            <p className="text-blue-950 font-semibold">{item.description}</p>
                        </div>
                        <div>
                            <Link to={`/chiefTechnician/task/${item.id}`} className="text-white bg-blue-900 hover:bg-blue-950"><Button className="bg-blue-900 hover:bg-blue-950">see more</Button></Link>
                        </div>
                    </div>
                )

            }
        }

    return(
        <>
        <div className="bg-blue-950 w-[calc(100%-275px)] flex-col justify-center items-center rounded-md p-2 overflow-hidden scrollbar overflow-y-scroll">
            <TechNAvBar />
            <PendingTasks />
        </div>


        </>
        )
}
export default AllTAsks;