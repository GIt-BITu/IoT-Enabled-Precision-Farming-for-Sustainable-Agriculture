import SideBar from "@/component/Dashboards/SideBar.jsx";
import PendingTasks from "@/component/PendingTasks.jsx";
import ChiefMain from "@/component/ChiefMain.jsx";
import React from "react";
const sideLinks = [
    {
        title: "Dashboard",
        icon: "fa-solid fa-house",
        path: `/chiefTechnician`
    },
    {
        title: "teams",
        icon: "fa-solid fa-people-group",
        path: `/chiefTechnician/teams`
    },
    {
        title: "Pending Tasks",
        icon: "fa-solid fa-list-check",
        path: `/chiefTechnician/pendingTasks`
    }
]

function AllPendingTasks() {

    return (<>
        <main>
            <div className="bg-[#f5f5dc] h-screen flex gap-5 p-5">
                <SideBar sideLinks={sideLinks} activeColor="bg-blue-950 text-[#f5f5dc]" inactiveColor="text-blue-950" hover="hover:bg-blue-950 hover:text-[#f5f5dc]">
                    <div></div>
                </SideBar>
                <PendingTasks/>
            </div>

        </main>

    </>)
}
export default AllPendingTasks;