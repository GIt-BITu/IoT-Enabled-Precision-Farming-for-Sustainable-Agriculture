import React, {useEffect, useState} from "react";
import Button  from "@/component/Button.jsx";


const progressTask=[
{
    name: "title" ,  state:"almost"
},
{
    name: "title" ,  state:"almost"
},
{
    name: "title" ,  state:"almost"
}
]


function ChiefMain(){
    const [recentTasks,setRecentTasks]=useState([])
    const [notification,setNotification] =useState(true)
    const [noData,setNoData]=useState(true)

    const Listp=progressTask.map(item=>
        <div className="bg-yellow-600 flex flex-col items-center px-7 py-6 space-y-4 justify-center rounded-md mt-7 " >
            <div>
                <h1 className="text-white font-semibold">{item.name}</h1>
            </div>
            <div className="flex justify-center items-center space-x-3 ">
                <p className="text-white">status: {item.state}</p>
                <Button className="bg-blue-900 text-white">update</Button>
            </div>

        </div>
    )
    useEffect(() => {
        fetch("http://localhost:9090/chiefTechnician").
            then((res)=>res.json()).then((data)=>{
                setRecentTasks(data);
                setNoData(!(data.length===0));

        })
            .catch((error=> {console.error("no availabale tasks",error);
            setNoData(false);}))
    }, []);

    function GetTasks(){
        if (!noData){
            return(
                <>
                    <div className="bg-white flex px-8 py-7 space-y-4 flex-col justify-center items-center rounded-md">
                       <h1 className="text-black text-xl font-bold">No Available Tasks</h1>
                    </div>
                </>
            );
        }else{

            return recentTasks.map(item=>
                <div key={item.index} className=" bg-white flex px-8 py-7 space-y-4 flex-col w-[30%] overflow-hidden min-h-[10%] justify-center items-center rounded-md">
                    <div>
                        <h1 className="text-black text-[18px]">{item.title}</h1>
                    </div>
                    <div >
                        <p className="text-black">{item.description}</p>
                    </div>
                    <div>
                        <Button className="bg-blue-900 hover:bg-blue-950">See more</Button>
                    </div>
                </div>

            );
        }



    }
    return(
        <>
            <div className="bg-blue-950 h-screen w-screen  flex-col justify-center items-center p-2">
                <nav className="flex justify-between items-center border-yellow-700 border-b-2">
                    <div>
                        <h1 className="text-xl ml-5 text-white font-bold hover:text-yellow-700">Dashboard </h1>
                    </div>
                    <div className="flex mr-5 relative">
                        <span className={`  ${notification ? 'absolute right-[0%] fa-solid w-1.5 h-1.5 rounded-full bg-red-600 block' : 'hidden'}`}></span>
                        <i className="cursor-pointer fa-solid fa-bell text-slate-300" onClick={()=>setNotification(!notification)}></i>
                    </div>
                </nav>
                <div className="flex justify-between items-center mt-5">
                    <div>
                        <h1 className="font-semibold text-white text-lg ml-5">Recent Tasks</h1>
                    </div>
                    <div>
                        <Button className="mr-5 bg-yellow-600 hover:bg-yellow-700 text-white">View All</Button>
                    </div>
                </div>
                <div className=" flex justify-around items-center mt-5">
                    <GetTasks />
                </div>
                <div className="flex-col justify-center items-center mt-7 ">
                    <div>
                        <h1 className="font-semibold text-white ml-5">Tasks in Progress</h1>
                        <div className="flex justify-around items-center">
                            {Listp}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ChiefMain;