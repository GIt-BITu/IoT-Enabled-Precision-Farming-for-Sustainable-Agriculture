import React from "react";
import ChiefMain from "@/component/ChiefMain.jsx";
import {Link, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import SideBar from "@/component/Dashboards/SideBar.jsx";
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


function TechChiefDashboard(){
    return(<>
            <main>
                <div className="bg-[#f5f5dc] h-screen flex gap-5 p-5">
                    <SideBar sideLinks={sideLinks} activeColor="bg-blue-950 text-[#f5f5dc]"
                             inactiveColor="text-blue-950" hover="hover:bg-blue-950 hover:text-[#f5f5dc]">
                       <div></div>
                    </SideBar>
                    <ChiefMain/>
                </div>

            </main>

        </>
    )
}

export default TechChiefDashboard;