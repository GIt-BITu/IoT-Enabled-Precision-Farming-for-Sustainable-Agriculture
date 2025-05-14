import SideBar from "@/component/Dashboards/SideBar.jsx";
import AllTasks from "@/component/Dashboards/ChiefTech/AllTasks.jsx";
import React from "react";
import {TechnicanLinks} from "/src/component/Dashboards/ChiefTech/Data.jsx";


function AllPendingTask() {

    return (<>
        <main>
            <div className="bg-[#f5f5dc] h-screen flex gap-5 p-5">
                <SideBar sideLinks={TechnicanLinks} activeColor="bg-blue-950 text-[#f5f5dc]" inactiveColor="text-blue-950" hover="hover:bg-blue-950 hover:text-[#f5f5dc]">
                    <div></div>
                </SideBar>
                <AllTasks />
            </div>

        </main>

    </>)
}
export default AllPendingTask;